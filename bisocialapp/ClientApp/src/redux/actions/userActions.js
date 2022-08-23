import * as actionTypes from "./actionTypes";

export function getFollowersSuccess(followers) {
  return { type: actionTypes.GET_FOLLOWERS, payload: followers };
}

//nickname'e göre kullanıcı bilgileri çekiliyor.
export function getUserByNicknameSuccess(user) {
  return { type: actionTypes.GET_USER_BY_NICKNAME, payload: user };
}

export function getUserByNickname(nickname) {
  return async function (dispatch) {
    let url = "https://localhost:7271/api/user/getuser/" + nickname;

    return await fetch(url)
      .then((respone) => respone.json())
      .then((result) => dispatch(getUserByNicknameSuccess(result)));
  };
}

export function getFollowersByUserId(userId) {
  return async function (dispatch) {
    let url = "https://localhost:7271/api/user/getfollower/" + userId;

    return await fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getFollowersSuccess(result)));
  };
}
