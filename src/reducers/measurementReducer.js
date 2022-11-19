import {
  SET_MEASUREMENT_ACTIVE_DEVICES_NUM,
  SET_MEASUREMENT_DEVICES,
  SET_MEASUREMENT_DEVICES_NUM
} from "../actions/types";

const initialState = {
  devicesNum: 0,
  activeDevicesNum: 0,
  devices: []
};

export default function measurementReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEASUREMENT_DEVICES_NUM: {
      return {
        ...state,
        devicesNum: action.devicesNum,
      };
    }
    case SET_MEASUREMENT_ACTIVE_DEVICES_NUM: {
      return {
        ...state,
        activeDevicesNum: action.activeDevicesNum,
      };
    }
    case SET_MEASUREMENT_DEVICES: {
      return {
        ...state,
        devices: action.devices
      }
    }
    default:
      return state;
  }
}
