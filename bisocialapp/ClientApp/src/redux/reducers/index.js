import { combineReducers } from "redux";
import friendListReducer from "./friendListReducer";
import { postListReducer, getPostByPostId } from "./postsReducer";
import loginReducer from "./loginReducer";
import tabsReducer from "./tabsReducer";
import addPostReducer from "./addPostReducer";
import {
  settingModalShow,
  themeReducer,
  postModalShow,
  addPostModal,
  selectMenuItem,
  followModalShow,
} from "./functionsReducer";
import { getFollowers } from "./userReducer";

const rootReducer = combineReducers({
  friendListReducer,
  addPostReducer,
  tabsReducer,
  loginReducer,
  postListReducer,
  settingModalShow,
  themeReducer,
  postModalShow,
  addPostModal,
  selectMenuItem,
  followModalShow,
  getFollowers,
  getPostByPostId,
});

export default rootReducer;
