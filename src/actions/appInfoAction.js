import {fetchAdmin, fetchUsers} from "./roleAction";
import {fetchFarms} from "./farmAction";
import {fetchMeasuringDevices} from "./measurementAction";
import {fetchConsumingDevices} from "./consumptionAction";

export function init(adminId) {
  return async (dispatch) => {
    try {
      dispatch(fetchAdmin(adminId))
      dispatch(fetchUsers(adminId))
      dispatch(fetchFarms())
      dispatch(fetchMeasuringDevices())
      dispatch(fetchConsumingDevices())
    } catch (e) {
      console.log(e)
    }
  }
}
