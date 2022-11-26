import {SET_MEASUREMENT_ACTIVE_DEVICES_NUM, SET_MEASUREMENT_DEVICES, SET_MEASUREMENT_DEVICES_NUM} from "./types";
import {
  _deleteMeasuringDevice,
  getMeasuringDevice,
  getMeasuringDevicesIds,
  patchMeasuringDevice,
  postMeasuringDevice
} from "../api/measurement";
import {StatusCodes} from "http-status-codes";

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

export function addNewMeasuringDevice(data) {
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
        responseClass: data.responseClass
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
