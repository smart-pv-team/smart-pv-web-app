import {combineReducers} from 'redux';
import userReducer from './userReducer'
import singInScreenReducer from "./singInScreenReducer";
import appInfoReducer from "./appInfoReducer";
import singUpScreenReducer from "./singUpScreenReducer";

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined;
  }
  const reducers = combineReducers({
    user: userReducer,
    singInScreen: singInScreenReducer,
    singUpScreen: singUpScreenReducer,
    appInfo: appInfoReducer
  })
  return reducers(state, action);
}

export default rootReducer