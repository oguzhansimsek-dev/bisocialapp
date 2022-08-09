import * as actionTypes from "../actions/actionTypes";
import functionsState from "./functionsState";

export function themeReducer(state = functionsState.theme, action) {
  switch (action.type) {
    case actionTypes.THEME_CONTROL:
      return action.payload;
    default:
      return state;
  }
}

export function settingModalShow(state = functionsState.settingModal, action) {
  switch (action.type) {
    case actionTypes.SETTING_MODAL_SHOW:
      return action.payload;
    default:
      return state;
  }
}

export function postModalShow(state = functionsState.postModal, action) {
  switch (action.type) {
    case actionTypes.POST_MODAL_SHOW:
      return action.payload;
    default:
      return state;
  }
}

export function addPostModal(state = functionsState.addPostModal, action) {
  switch (action.type) {
    case actionTypes.ADD_POST_MODAL:
      return action.payload;
    default:
      return state;
  }
}

export function followModalShow(state = functionsState.followModal, action) {
  switch (action.type) {
    case actionTypes.FOLLOW_MODAL_SHOW:
      return action.payload;
    default : 
      return state;
  }
}

export function selectMenuItem(state = functionsState.settingMenu, action) {
  switch (action.type) {
    case actionTypes.SELECT_MENU_ITEM:
      return action.payload;
    default:
      return state;
  }
}
