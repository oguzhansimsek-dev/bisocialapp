import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export function getFollowers(state = initialState.followers, action) {
  switch (action.type) {
    case actionTypes.GET_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}

export function getUserByNickname(state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.GET_USER_BY_NICKNAME:
      return action.payload;
    default:
      return state;
  }
}
