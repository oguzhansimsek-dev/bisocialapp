import * as actionTypes from "./actionTypes";

export function getPostsSuccess(posts) {
  return { type: actionTypes.GET_POSTS, payload: posts };
}

export function likeToPost(post) {
  return { type: actionTypes.LIKE_TO_POST, payload: post };
}

export function getPostDetailSuccess(post) {
  return { type: actionTypes.GET_POST_DETAIL, payload: post };
}

export function addCommentToPost(post) {
  return { type: actionTypes.ADD_COMMENT_TO_POST, payload: post };
}

export function getPosts() {
  return function (dispatch) {
    //let url = "http://localhost:3000/posts/";
    let url = "https://localhost:7271/api/post/getposts";
    // let url = "http://localhost:5082/api/post/getposts";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPostsSuccess(result)));
  };
}

export function getPostByPostId(id) {
  return function (dispatch) {
    //let url = "http://localhost:3000/posts/";
    let url = "https://localhost:7271/api/post/getpost/" + id;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getPostDetailSuccess(result[0])));
  };
}
