import {get, put} from "./requests";
import {devicesModelAddress, farmAddress, farmIdsAddress, responseOptionsAddress} from "./routes";

export async function getFarmIds() {
  return get(farmIdsAddress)
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

export async function putFarm(farm) {
  return put("", {params: {farm}})
}