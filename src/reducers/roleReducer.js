import {SET_ADMIN, SET_USERS} from "../actions/types";

const initialState = {
  userId: "",
  email: "",
  name: "",
  farmId: "",
  users: ""
};

export default function roleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADMIN: {
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        name: action.name,
        farmId: action.farmId
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    default:
      return state;
  }
}
