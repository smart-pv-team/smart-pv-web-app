import {fetchAdmin, fetchUsers} from "./roleAction";
import {fetchFarms} from "./farmAction";
import {fetchMeasuringDevices} from "./measurementAction";

export function init(adminId) {
  return async (dispatch) => {
    try {
      dispatch(fetchAdmin(adminId))
      dispatch(fetchUsers(adminId))
      dispatch(fetchFarms())
      dispatch(fetchMeasuringDevices())
    } catch (e) {
      console.log(e)
    }
  }
}
