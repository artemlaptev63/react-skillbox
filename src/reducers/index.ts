import {combineReducers} from "@reduxjs/toolkit";
import {commentReducer} from "./comments";
import {postsReducer} from "./posts";
import {tokenReducer} from "./token";

export const rootReducer = combineReducers({
  posts: postsReducer,
  comment: commentReducer,
  token: tokenReducer,
})