import {SET_INTERVALS, SET_RULES} from "./types";
import {
  _deleteInterval,
  _deleteRule,
  getFarmIntervals,
  getIntervalRules,
  patchInterval,
  patchRule
} from "../api/algorithm";
import {StatusCodes} from "http-status-codes";

export function setRules(rules, intervals, devices) {
  return {
    type: SET_RULES,
    rules: rules,
    intervals: intervals,
    devices: devices
  }
}

export function setIntervals(intervals) {
  return {
    type: SET_INTERVALS,
    intervals: intervals
  }
}

export function fetchAlgorithm() {
  return async (dispatch, getState) => {
    const intervals = await getFarmIntervals(getState().farm.farms[0]?.id).then(async (e) => await e.json())
    const rules = (await Promise.all(
        intervals.map(async ({id}) => await getIntervalRules(id).then(async (e) => await e.json())))).flat();

    dispatch(setIntervals(intervals))
    return dispatch(setRules(rules, getState().algorithm.intervals, getState().consumption.devices))
  }
}

export function deleteInterval(id) {
  return async (dispatch) => {
    try {
      const rules = await getIntervalRules(id).then(async (e) => await e.json())
      rules.forEach(r => dispatch(deleteRule(r.id)))
      const response = await _deleteInterval(id)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchAlgorithm())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function deleteRule(id) {
  return async (dispatch) => {
    try {
      const response = await _deleteRule(id)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchAlgorithm())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function addInterval(data) {
  return async (dispatch, getState) => {
    const interval = {
      ...data,
      farmId: getState().farm.farms[0]?.id
    }
    try {
      const response = await patchInterval(interval)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchAlgorithm())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function addRule(data) {
  return async (dispatch, getState) => {
    const rule = {
      deviceId: getState().consumption.devices.filter(d => d.name === data.device)[0]?.id || undefined,
      action: data.action,
      intervalId: getState().algorithm.intervals.filter(i => i.name === data.interval)[0]?.id || undefined
    }
    try {
      const response = await patchRule(rule)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchAlgorithm())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}