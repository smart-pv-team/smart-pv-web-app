import {SET_MEASUREMENT_ACTIVE_DEVICES_NUM, SET_MEASUREMENT_DEVICES, SET_MEASUREMENT_DEVICES_NUM} from "./types";
import {_deleteMeasuringDevice, patchMeasuringDevice, postMeasuringDevice} from "../api/measurement";
import {StatusCodes} from "http-status-codes";
import {getFarmMeasuringDevice} from "../api/farm";

export function setMeasurementDevicesNum(devices) {
  const num = devices.length
  return {
    type: SET_MEASUREMENT_DEVICES_NUM,
    devicesNum: num
  }
}

export function setMeasurementActiveDevicesNum(devices) {
  const num = devices.map((device) => device.isOn).filter(value => value === true).length
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
  return async (dispatch, getState) => {
    const devices = await getFarmMeasuringDevice(getState().farm.farms[0]?.id).then(async (e) => await e.json())
    dispatch(setMeasurementDevices(devices))
    dispatch(setMeasurementActiveDevicesNum(devices))
    return dispatch(setMeasurementDevicesNum(devices))
  }
}

export function addMeasuringDevice(data) {
  console.log(data)
  const measuringDevice = {
    name: data.name,
    ipAddress: data.ipAddress,
    id: data.id,
    farmId: data.farmId,
    deviceModel: data.deviceModel,
    endpoints: [
      {
        description: data.description,
        action: "READ",
        endpoint: data.endpoint,
        httpMethod: data.httpMethod,
        httpHeaders: data.headers.reduce(
            (obj, item) => Object.assign(obj, {[item.header]: [item.value]}), {}),
        responseClass: data.responseClass,
        body: data.body
      }
    ]

  }
  return async (dispatch) => {
    try {
      const response = measuringDevice.id ?
          await patchMeasuringDevice(measuringDevice) :
          await postMeasuringDevice(measuringDevice)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchMeasuringDevices())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function deleteMeasuringDevice(id) {
  return async (dispatch) => {
    try {
      const response = await _deleteMeasuringDevice(id)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchMeasuringDevices())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}
