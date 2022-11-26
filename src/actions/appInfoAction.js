import {fetchUser} from "./userAction";
import {fetchFarms} from "./farmAction";
import {fetchMeasuringDevices} from "./measurementAction";

export function init(userId) {
  return async (dispatch) => {
    try {
      dispatch(fetchUser(userId))
      dispatch(fetchFarms())
      dispatch(fetchMeasuringDevices())
    } catch (e) {
      console.log(e)
    }
  }
}
