import {SET_EMAIL, SET_NAME, SET_USERID} from "../actions/types";

const initialState = {
  userId: "",
  email: "",
  name: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERID: {
      return {
        ...state,
        userId: action.userId,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_NAME: {
      return {
        ...state,
        name: action.name
      }
    }
    default:
      return state;
  }
}
