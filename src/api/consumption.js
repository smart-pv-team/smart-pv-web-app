import {_delete, get, patch, post} from "./requests";
import {
  consumptionDeviceAddress,
  consumptionDeviceParametersPowerConsumptionAddress,
  consumptionDeviceParametersPriorityAddress,
  consumptionDevicesAddress
} from "./routes";

export async function getConsumingDevicesIds() {
  return get(consumptionDevicesAddress)
}

export async function getConsumingDevice(id) {
  return get(consumptionDeviceAddress(id))
}

export async function patchConsumingDevice(device) {
  return patch(consumptionDevicesAddress, {params: device})
}

export async function postConsumingDevice(device) {
  return post(consumptionDevicesAddress, {params: device})
}

export async function _deleteConsumingDevice(id) {
  return _delete(consumptionDeviceAddress(id))
}

export async function patchDevicePower(id, powerConsumption) {
  return patch(consumptionDeviceParametersPowerConsumptionAddress(id), {params: powerConsumption})
}

export async function patchDevicePriority(id, priority) {
  return patch(consumptionDeviceParametersPriorityAddress(id), {params: priority})
}