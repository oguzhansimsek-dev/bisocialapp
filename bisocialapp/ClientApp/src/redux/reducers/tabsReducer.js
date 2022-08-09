import * as actionTypes from "../actions/actionTypes";
import functionsState from "./functionsState";

function tabsReducer(state = functionsState.currentTab, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_TAB:
      return action.payload;
    default:
      return state;
  }
}

export default tabsReducer;
