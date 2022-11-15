import {SET_SING_UP_ERROR} from "./types";

export function setSingUpError(error) {
  return {
    type: SET_SING_UP_ERROR,
    singUpError: error
  }
}
