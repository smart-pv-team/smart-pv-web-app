import {SET_INTERVALS, SET_RULES} from "../actions/types";

const initialState = {
  intervals: [],
  rules: {}
};

export default function algorithmReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INTERVALS: {
      const intervals = action.intervals.map((interval, idx) => {
        return {
          ...interval,
          name: idx + 1
        }
      })
      return {
        ...state,
        intervals: intervals,
      };
    }
    case SET_RULES: {
      const rules = action.rules.map((rule) => {
        return {
          ...rule,
          intervalName: action.intervals.filter(i => i.id === rule.intervalId)[0]?.name,
          deviceName: action.devices.filter(i => i.id === rule.deviceId)[0]?.name,
          deviceModel: action.devices.filter(i => i.id === rule.deviceId)[0]?.deviceModel
        }
      })
      return {
        ...state,
        rules: rules,
      };
    }
    default:
      return state;
  }
}
