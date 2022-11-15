import {SET_SCREEN} from "./types";

export function setScreen(screen) {
  return {
    type: SET_SCREEN,
    screen: screen
  }
}
