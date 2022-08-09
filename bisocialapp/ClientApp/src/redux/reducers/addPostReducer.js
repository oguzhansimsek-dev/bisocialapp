import * as actionTypes from "../actions/actionTypes";
import functionsState from "./functionsState";

function addPostReducer(state = functionsState.showAddPost, action) {
  switch (action.type) {
    case actionTypes.SHOW_ADD_POST:
      return action.payload;

    default:
      return state;
  }
}

export default addPostReducer;
