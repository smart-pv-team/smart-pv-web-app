import {SET_CONSUMPTION_ACTIVE_DEVICES_NUM, SET_CONSUMPTION_DEVICES, SET_CONSUMPTION_DEVICES_NUM} from "./types";
import {StatusCodes} from "http-status-codes";
import {
  _deleteConsumingDevice,
  getConsumingDevice,
  getConsumingDevicesIds,
  patchConsumingDevice,
  postConsumingDevice
} from "../api/consumption";

export function setConsumptionDevicesNum(num) {
  return {
    type: SET_CONSUMPTION_DEVICES_NUM,
    devicesNum: num
  }
}

export function setConsumptionActiveDevicesNum(num) {
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
  return async (dispatch) => {
    const deviceIds = await getConsumingDevicesIds().then(async (e) => await e.json())
    const devices = await Promise.all(
        deviceIds.map(async (id) => await getConsumingDevice(id).then(async (e) => await e.json())));

    dispatch(setConsumptionDevices(devices))
    dispatch(setConsumptionActiveDevicesNum(devices.length))
    dispatch(setConsumptionDevicesNum(devices.length))
  }
}

export function addNewConsumingDevice(data) {
  console.log(data)
  const consumingDevice = {
//TODO mapping
  }
  return async (dispatch) => {
    try {
      const response = consumingDevice.id ?
          await patchConsumingDevice(consumingDevice) :
          await postConsumingDevice(consumingDevice)
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

export function setPriorityPower(data) {
  return async (dispatch) => {
    const priorityData = data.map((device) => {
      return {id: device.id, priority: device.priority}
    })
    const powerData = data.map((device) => {
      return {id: device.id, power: device.power}
    })
    try {
      //TODO server endpoint
    } catch (e) {
      console.log(e)
    }
  }
}

export function setPriority(data) {
  const priorityData = data.map((device) => {
    return {id: device.id, priority: device.priority}
  })
  try {
    //TODO server endpoint
  } catch (e) {
    console.log(e)
  }
}

export function setPower(data) {
  const powerData = data.map((device) => {
    return {id: device.id, power: device.power}
  })
  try {
    //TODO server endpoint
  } catch (e) {
    console.log(e)
  }
}
