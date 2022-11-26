import {SET_DEVICE_MODELS, SET_FARMS, SET_RESPONSE_OPTIONS} from "../actions/types";

const initialState = {
  deviceModels: [],
  responseOptions: [],
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
    case SET_RESPONSE_OPTIONS: {
      return {
        ...state,
        responseOptions: action.responseOptions,
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
