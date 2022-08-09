import * as actionTypes from "./actionTypes";

export function getLoginUserSuccess(user) {
  return { type: actionTypes.LOGIN_ACCOUNT, payload: user };
}

export function getLoginUser() {
  return function (dispatch) {
    let url = "http://localhost:3000/login";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getLoginUserSuccess(result)));
  };
}
