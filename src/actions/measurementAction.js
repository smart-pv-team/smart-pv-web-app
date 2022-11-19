import {SET_MEASUREMENT_ACTIVE_DEVICES_NUM, SET_MEASUREMENT_DEVICES, SET_MEASUREMENT_DEVICES_NUM} from "./types";

export function setMeasurementDevicesNum(num) {
  return {
    type: SET_MEASUREMENT_DEVICES_NUM,
    devicesNum: num
  }
}

export function setMeasurementActiveDevicesNum(num) {
  return {
    type: SET_MEASUREMENT_ACTIVE_DEVICES_NUM,
    activeDevicesNum: num
  }
}

export function setMeasurementDevices(devices) {
  return {
    type: SET_MEASUREMENT_DEVICES,
    devices: devices
  }
}

export function addNewDevice(data) {
  return async (dispatch) => {
    //post
    //fetch
    const devices = []
    dispatch(setMeasurementDevices(devices))
  }
}