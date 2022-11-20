import {getDeviceModels, getFarm, getFarmIds} from "../api/farm";
import {SET_DEVICE_MODELS, SET_FARMS} from "./types";

export function setDeviceModels(value) {
  return {
    type: SET_DEVICE_MODELS,
    deviceModels: value
  }
}

export function setFarms(value) {
  return {
    type: SET_FARMS,
    farms: value
  }
}

export function fetchFarms() {
  return async (dispatch) => {
    const farmIds = await getFarmIds().then(async (e) => await e.json())
    const farms = await Promise.all(
        farmIds.map(async (id) => await getFarm(id).then(async (e) => await e.json())));
    const deviceModels = await getDeviceModels().then(async (e) => await e.json())
    dispatch(setDeviceModels(deviceModels))
    dispatch(setFarms(farms))
  }
}