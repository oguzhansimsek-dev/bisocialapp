import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
}

export default loginReducer;
