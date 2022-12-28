import {
  getDeviceModels,
  getFarm,
  getResponseOptions,
  patchFarm,
  patchFarmAlgorithm,
  patchFarmRunning
} from "../api/farm";
import {SET_DEVICE_MODELS, SET_FARMS, SET_RESPONSE_OPTIONS} from "./types";
import {StatusCodes} from "http-status-codes";

export function setDeviceModels(value) {
  return {
    type: SET_DEVICE_MODELS,
    deviceModels: value
  }
}

export function setResponseOptions(value) {
  return {
    type: SET_RESPONSE_OPTIONS,
    responseOptions: value
  }
}

export function setFarms(value) {
  return {
    type: SET_FARMS,
    farms: value
  }
}

export function fetchFarms(farmId) {
  return async (dispatch) => {
    const farm = await getFarm(farmId).then(async (e) => await e.json());
    const deviceModels = await getDeviceModels().then(async (e) => await e.json())
    const responseOptions = await getResponseOptions().then(async (e) => await e.json())
    dispatch(setDeviceModels(deviceModels))
    dispatch(setResponseOptions(responseOptions))
    return dispatch(setFarms([farm]))
  }
}

export function addFarm(farm) {
  return async (dispatch) => {
    try {
      const response = await patchFarm(farm).then(async (e) => await e.text())
      if (response) {
        dispatch(fetchFarms(response))
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function setAlgorithm(algorithm) {
  return async (dispatch, getState) => {
    try {
      const farmId = getState().farm.farms[0]?.id
      const response = await patchFarmAlgorithm(farmId, algorithm)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchFarms(farmId))
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function setRunning(running) {
  return async (dispatch, getState) => {
    try {
      const farmId = getState().farm.farms[0]?.id
      const response = await patchFarmRunning(farmId, running)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchFarms(farmId))
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}