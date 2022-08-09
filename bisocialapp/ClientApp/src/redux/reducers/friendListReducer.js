import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const friendListReducer = (state = initialState.friendList, action) => {
  switch (action.type) {
    case actionTypes.GET_FRIEND_LIST:
      return action.payload;

    default:
      return state;
  }
};

export default friendListReducer;
