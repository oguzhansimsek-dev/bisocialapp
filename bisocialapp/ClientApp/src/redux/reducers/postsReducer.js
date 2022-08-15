import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export function postListReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return action.payload;

    default:
      return state;
  }
}

export function getPostByPostId(state = initialState.post, action) {
  switch (action.type) {
    case actionTypes.GET_POST_DETAIL:
      return action.payload;
    default:
      return state;
  }
}
