import * as actionTypes from "./actionTypes";

export function getFollowers(users) {
  return { type: actionTypes.GET_FOLLOWERS, payload: users };
}
