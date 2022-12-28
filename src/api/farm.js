import {get, patch, put} from "./requests";
import {
  devicesModelAddress,
  farmAddress,
  farmAlgorithmAddress,
  farmConsumptionDevicesAddress,
  farmMeasurementDevicesAddress,
  farmRunningAddress,
  farmsAddress,
  responseOptionsAddress
} from "./routes";

export async function getFarmIds() {
  return get(farmsAddress)
}

export async function patchFarm(farm) {
  return patch(farmsAddress, {params: farm})
}

export async function getFarm(id) {
  return get(farmAddress(id))
}

export async function getDeviceModels() {
  return get(devicesModelAddress)
}

export async function getResponseOptions() {
  return get(responseOptionsAddress)
}

export async function getFarmMeasuringDevice(farmId) {
  return get(farmMeasurementDevicesAddress(farmId))
}

export async function getFarmConsumptionDevice(farmId) {
  return get(farmConsumptionDevicesAddress(farmId))
}

export async function patchFarmAlgorithm(farmId, algorithmType) {
  return patch(farmAlgorithmAddress(farmId), {params: {algorithmType}})
}

export async function patchFarmRunning(farmId, running) {
  return patch(farmRunningAddress(farmId), {params: running})
}

export async function putFarm(farm) {
  return put("", {params: {farm}})
}