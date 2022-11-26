import {_delete, get, patch, post} from "./requests";
import {measurementDeviceAddress, measurementDevicesAddress} from "./routes";

export async function getMeasuringDevicesIds() {
  return get(measurementDevicesAddress)
}

export async function getMeasuringDevice(id) {
  return get(measurementDeviceAddress(id))
}

export async function patchMeasuringDevice(device) {
  return patch(measurementDevicesAddress, {params: {...device}})
}

export async function postMeasuringDevice(device) {
  return post(measurementDevicesAddress, {params: {...device}})
}

export async function _deleteMeasuringDevice(id) {
  return _delete(measurementDeviceAddress(id))
}