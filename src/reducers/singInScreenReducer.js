import {SET_SING_IN_ERROR} from "../actions/types";

const initialState = {
  singInError: "",
};

export default function singInScreenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SING_IN_ERROR: {
      return {
        ...state,
        singInError: action.singInError,
      };
    }
    default:
      return state;
  }
}
