import {SET_SCREEN} from "../actions/types";

const initialState = {
  screen: "singIn",
};

export default function appInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCREEN: {
      return {
        ...state,
        screen: action.screen,
      };
    }
    default:
      return state;
  }
}
