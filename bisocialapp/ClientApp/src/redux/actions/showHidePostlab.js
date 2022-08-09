import * as actionTypes from "./actionTypes";

export function addPostToggle(isClicked) {
  return { type: actionTypes.SHOW_ADD_POST, payload: isClicked };
}
