import * as actionTypes from "./actionTypes";

export function changeTab(id) {
  return { type: actionTypes.CHANGE_CURRENT_TAB, payload: id };
}
