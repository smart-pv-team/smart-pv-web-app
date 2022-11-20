import {fetchMeasuringDevices} from "./measurementAction";
import {fetchFarms} from "./farmAction";

export function init(userId) {
  return async (dispatch) => {
    dispatch(fetchMeasuringDevices());
    dispatch(fetchFarms());
  }
}
