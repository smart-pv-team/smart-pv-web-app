import {SET_DEVICE_MODELS, SET_FARMS} from "../actions/types";

const initialState = {
  deviceModels: [],
  farms: [],
};

export default function farmReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEVICE_MODELS: {
      return {
        ...state,
        deviceModels: action.deviceModels,
      };
    }
    case SET_FARMS: {
      return {
        ...state,
        farms: action.farms,
      };
    }
    default:
      return state;
  }
}
