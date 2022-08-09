import * as actionTypes from "./actionTypes";

export function changeTheme(theme) {
  return { type: actionTypes.THEME_CONTROL, payload: theme };
}

export function settingModalShow(isOpened) {
  return { type: actionTypes.SETTING_MODAL_SHOW, payload: isOpened };
}

export function postModalShow(isOpened) {
  return { type: actionTypes.POST_MODAL_SHOW, payload: isOpened };
}

export function followModalShow(isOpened) {
  return { type: actionTypes.FOLLOW_MODAL_SHOW, payload: isOpened };
}

export function addPostModal(isOpened) {
  return { type: actionTypes.ADD_POST_MODAL, payload: isOpened };
}

export function selectMenuItem(item) {
  return { type: actionTypes.SELECT_MENU_ITEM, payload: item };
}
