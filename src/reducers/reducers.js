import {combineReducers} from 'redux';
import roleReducer from './roleReducer'
import singInScreenReducer from "./singInScreenReducer";
import appInfoReducer from "./appInfoReducer";
import singUpScreenReducer from "./singUpScreenReducer";
import measurementReducer from "./measurementReducer";
import farmReducer from "./farmReducer";

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined;
  }
  const reducers = combineReducers({
    user: roleReducer,
    singInScreen: singInScreenReducer,
    singUpScreen: singUpScreenReducer,
    appInfo: appInfoReducer,
    measurement: measurementReducer,
    farm: farmReducer,
  })
  return reducers(state, action);
}

export default rootReducer
