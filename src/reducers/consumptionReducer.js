import {
  SET_CONSUMPTION_ACTIVE_DEVICES_NUM,
  SET_CONSUMPTION_DEVICES,
  SET_CONSUMPTION_DEVICES_NUM
} from "../actions/types";

const initialState = {
  devicesNum: 0,
  activeDevicesNum: 0,
  devices: []
};

export default function consumptionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONSUMPTION_DEVICES_NUM: {
      return {
        ...state,
        devicesNum: action.devicesNum,
      };
    }
    case SET_CONSUMPTION_ACTIVE_DEVICES_NUM: {
      return {
        ...state,
        activeDevicesNum: action.activeDevicesNum,
      };
    }
    case SET_CONSUMPTION_DEVICES: {
      return {
        ...state,
        devices: action.devices
      }
    }
    default:
      return state;
  }
}
