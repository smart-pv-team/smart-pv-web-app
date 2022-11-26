import {SET_USER} from "./types";
import {deleteUserFirebase, singInFirebase, singUpFirebase} from "../auth";
import {setSingInError} from "./singInScreenAction";
import {setSingUpError} from "./singUpScreenAction";
import {init} from "./appInfoAction";
import {getUserByToken, putUser} from "../api/user";
import {StatusCodes} from "http-status-codes";

export function setUser(userId, email, name, farmId) {
  return {
    type: SET_USER,
    userId: userId,
    email: email,
    name: name,
    farmId: farmId
  }
}

export function fetchUser(uid) {
  return async (dispatch) => {
    try {
      const response = await getUserByToken(uid)
      if (response.status === StatusCodes.OK) {
        const {name, farmId, email} = await response.json()
        if (farmId) {
          dispatch(setUser(uid, email, name, farmId))
          return Promise.resolve("FarmSet");
        } else {
          return Promise.reject("SetFarm")
        }
      } else {
        throw new Error(response.status)
      }
    } catch (errorMessage) {
      console.log(errorMessage)
    }
  }
}

export function singIn(email, password, navigate) {
  return async (dispatch) => {
    try {
      const {user} = await singInFirebase(email, password)
      const response = await getUserByToken(user.uid);
      if (response.status === StatusCodes.OK) {
        console.log(response)
        const {name} = await response.json()
        dispatch(setUser(user.uid, email, name));
        dispatch(init(user.uid));
        navigate("/dashboard")
      } else {
        throw new Error(response.status)
      }

    } catch (errorMessage) {
      dispatch(setSingInError(errorMessage.message))
      console.log(errorMessage)
    }
  }
}

export function singUp(email, password, name, navigate) {
  return async (dispatch) => {
    try {
      const {user} = await singUpFirebase(email, password)
      const response = await putUser({token: user.uid, name: name, email: email})
      if (response.status === StatusCodes.OK) {
        navigate("/singIn")
      } else {
        await deleteUserFirebase(user);
        throw new Error(response.status)
      }
    } catch (errorMessage) {
      dispatch(setSingUpError(errorMessage.message))
      console.log(errorMessage)
    }
  }
}
