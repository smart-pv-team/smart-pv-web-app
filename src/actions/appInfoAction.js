import {fetchAdmin, fetchUsers} from "./roleAction";
import {fetchFarms} from "./farmAction";
import {fetchMeasuringDevices} from "./measurementAction";
import {fetchConsumingDevices} from "./consumptionAction";
import {fetchAlgorithm} from "./algorithmAction";

export function init(adminId) {
  return async (dispatch, getState) => {
    try {
      await dispatch(fetchRoles(adminId))
      .then(() => {
        dispatch(fetchFarmAllInfo(getState().user.farmId))
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function fetchRoles(adminId) {
  return async (dispatch, getState) => {
    await dispatch(fetchAdmin(adminId))
    await dispatch(fetchUsers(adminId))
    if (getState().user.farmId !== "") {
      return Promise.resolve("Farm specified")
    }
    return Promise.reject("No farm specified")
  }
}

export function fetchFarmAllInfo(farmId) {
  return async (dispatch) => {
    await dispatch(fetchFarms(farmId))
    await dispatch(fetchMeasuringDevices())
    await dispatch(fetchConsumingDevices())
    await dispatch(fetchAlgorithm())
  }
}


