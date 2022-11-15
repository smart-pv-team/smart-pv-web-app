import {SET_SING_UP_ERROR} from "../actions/types";

const initialState = {
  singUpError: "",
};

export default function singUpScreenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SING_UP_ERROR: {
      return {
        ...state,
        singUpError: action.singUpError,
      };
    }
    default:
      return state;
  }
}