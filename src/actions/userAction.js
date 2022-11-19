import {SET_EMAIL, SET_NAME, SET_USERID} from "./types";
import {singInFirebase, singUpFirebase} from "../auth";
import {setSingInError} from "./singInScreenAction";
import {setSingUpError} from "./singUpScreenAction";

export function setUserId(userId) {
  return {
    type: SET_USERID,
    userId: userId
  }
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email: email
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    name: name
  }
}

export function singIn(email, password, navigate) {
  return async (dispatch) => {
    singInFirebase(email, password).then(
        (userCredential) => {
          const {user} = userCredential;
          dispatch(setUserId(user.uid));
          dispatch(setEmail(email));
          navigate("/dashboard")
        }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(setSingInError(errorMessage))
      console.log(errorMessage, errorCode)
    });
  }
}

export function singUp(email, password, name, navigate) {
  return async (dispatch) => {
    singUpFirebase(email, password)
    .then((userCredential) => {
      const {user} = userCredential;
      dispatch(setUserId(user.uid));
      dispatch(setName(name));
      dispatch(setEmail(email));
      navigate("/dashboard")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(setSingUpError(errorMessage))
      console.log(errorMessage, errorCode)
    });
  }
}