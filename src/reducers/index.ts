import {combineReducers} from "@reduxjs/toolkit";
import {commentReducer} from "./comments";
import {postsReducer} from "./posts";
import {tokenReducer} from "./token";
import {userDataReducer} from "./user-data";

export const rootReducer = combineReducers({
  posts: postsReducer,
  comment: commentReducer,
  token: tokenReducer,
  userData: userDataReducer,
})