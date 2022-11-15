import {SET_SING_IN_ERROR} from "./types";

export function setSingInError(error) {
  return {
    type: SET_SING_IN_ERROR,
    singInError: error
  }
}
