import {SET_ADMIN, SET_USERS} from "./types";
import {deleteUserFirebase, singInFirebase, singUpFirebase} from "../auth";
import {setSingInError} from "./singInScreenAction";
import {setSingUpError} from "./singUpScreenAction";
import {init} from "./appInfoAction";
import {_deleteUser, getAdminByToken, getAdminUsers, putAdmin, putUser} from "../api/role";
import {StatusCodes} from "http-status-codes";

export function setAdmin(adminId, email, name, farmId) {
  return {
    type: SET_ADMIN,
    userId: adminId,
    email: email,
    name: name,
    farmId: farmId
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  }
}

export function fetchAdmin(uid) {
  return async (dispatch) => {
    try {
      const response = await getAdminByToken(uid)
      if (response.status === StatusCodes.OK) {
        const {name, farmId, email} = await response.json()
        if (farmId) {
          return dispatch(setAdmin(uid, email, name, farmId))
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
      const response = await getAdminByToken(user.uid);

      if (response.status === StatusCodes.OK) {
        const {name} = await response.json()
        dispatch(setAdmin(user.uid, email, name));
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
      const response = await putAdmin({token: user.uid, name: name, email: email})
      if (response.status === StatusCodes.OK) {
        await putUser({token: user.uid, name: name, email: email, adminId: user.uid})
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

export function fetchUsers(adminId) {
  return async (dispatch) => {
    try {
      const response = await getAdminUsers(adminId)
      if (response.status === StatusCodes.OK) {
        const users = await response.json()
        return dispatch(setUsers(users))
      } else {
        throw new Error(response.status)
      }
    } catch (errorMessage) {
      console.log(errorMessage)
    }
  }
}

export function addUser(name, email, password) {
  return async (dispatch, getState) => {
    try {
      const {user} = await singUpFirebase(email, password)
      const adminId = getState().user.userId
      const response = await putUser({token: user.uid, name: name, email: email, adminId: adminId})
      if (response.status === StatusCodes.OK) {
        dispatch(fetchUsers(adminId))
      } else {
        await deleteUserFirebase(user);
        throw new Error(response.status)
      }
    } catch (errorMessage) {
      console.log(errorMessage)
    }
  }
}

export function deleteUser(uid) {
  return async (dispatch, getState) => {
    try {
      const response = await _deleteUser(uid)
      const adminId = getState().user.userId
      if (response.status === StatusCodes.OK) {
        dispatch(fetchUsers(adminId))
      } else {
        throw new Error(response.status)
      }
    } catch (errorMessage) {
      console.log(errorMessage)
    }
  }
}