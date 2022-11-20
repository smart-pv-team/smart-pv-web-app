import {get, put} from "./requests";
import {measurementDeviceAddress, measurementDevicesIdsAddress} from "./routes";

export async function getMeasuringDevicesIds() {
  return get(measurementDevicesIdsAddress)
}

export async function getMeasuringDevice(id) {
  return get(measurementDeviceAddress(id))
}

export async function putMeasuringDevice(device) {
  return put("", {params: {device}})
}