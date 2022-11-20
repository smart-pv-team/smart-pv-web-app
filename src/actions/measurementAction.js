import {SET_MEASUREMENT_ACTIVE_DEVICES_NUM, SET_MEASUREMENT_DEVICES, SET_MEASUREMENT_DEVICES_NUM} from "./types";
import {getMeasuringDevice, getMeasuringDevicesIds} from "../api/measurement";

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

export function fetchMeasuringDevices() {
  return async (dispatch) => {
    const deviceIds = await getMeasuringDevicesIds().then(async (e) => await e.json())
    const devices = await Promise.all(
        deviceIds.map(async (id) => await getMeasuringDevice(id).then(async (e) => await e.json())));

    dispatch(setMeasurementDevices(devices))
    dispatch(setMeasurementActiveDevicesNum(devices.length))
    dispatch(setMeasurementDevicesNum(devices.length))
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