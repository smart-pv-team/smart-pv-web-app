import {SET_USER} from "../actions/types";

const initialState = {
  userId: "",
  email: "",
  name: "",
  farmId: ""
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        name: action.name,
        farmId: action.farmId
      };
    }
    default:
      return state;
  }
}
