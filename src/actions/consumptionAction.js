import {SET_CONSUMPTION_ACTIVE_DEVICES_NUM, SET_CONSUMPTION_DEVICES, SET_CONSUMPTION_DEVICES_NUM} from "./types";
import {StatusCodes} from "http-status-codes";
import {
  _deleteConsumingDevice,
  patchConsumingDevice,
  patchDevicePower,
  patchDevicePriority,
  postConsumingDevice
} from "../api/consumption";
import {getFarmConsumptionDevice} from "../api/farm";

export function setConsumptionDevicesNum(devices) {
  const num = devices.length
  return {
    type: SET_CONSUMPTION_DEVICES_NUM,
    devicesNum: num
  }
}

export function setConsumptionActiveDevicesNum(devices) {
  const num = devices.map((device) => device.isOn).filter(value => value === true).length
  return {
    type: SET_CONSUMPTION_ACTIVE_DEVICES_NUM,
    activeDevicesNum: num
  }
}

export function setConsumptionDevices(devices) {
  return {
    type: SET_CONSUMPTION_DEVICES,
    devices: devices
  }
}

export function fetchConsumingDevices() {
  return async (dispatch, getState) => {
    const devices = await getFarmConsumptionDevice(getState().farm.farms[0]?.id).then(async (e) => await e.json())
    dispatch(setConsumptionDevices(devices))
    dispatch(setConsumptionActiveDevicesNum(devices))
    return dispatch(setConsumptionDevicesNum(devices))
  }
}

export function updateConsumingDevice(data) {
  console.log(data)
  return async (dispatch) => {
    try {
      const response = data.id ?
          await patchConsumingDevice(data) :
          await postConsumingDevice(data)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchConsumingDevices())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function deleteConsumingDevice(id) {
  return async (dispatch) => {
    try {
      const response = await _deleteConsumingDevice(id)
      if (response.status === StatusCodes.OK) {
        dispatch(fetchConsumingDevices())
      } else {
        throw new Error(response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export function setDevicesPower(data) {
  const powerData = data.devices.map((device) => ({id: device.id, powerConsumption: device.power}))
  return async (dispatch) => {
    try {
      await Promise.all(powerData.map(async ({id, powerConsumption}) => await patchDevicePower(id, powerConsumption)));
      dispatch(fetchConsumingDevices())
    } catch (e) {
      console.log(e)
    }
  }
}

export function setDevicesPriority(data) {
  console.log(data)
  const priorityData = data.devices.map((device) => {
    return {id: device.id, priority: device.priority}
  })

  return async (dispatch) => {
    try {
      await Promise.all(priorityData.map(async ({id, priority}) => await patchDevicePriority(id, priority)));
      dispatch(fetchConsumingDevices())
    } catch (e) {
      console.log(e)
    }
  }
}
