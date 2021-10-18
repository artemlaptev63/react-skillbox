import {combineReducers} from "@reduxjs/toolkit";
import {commentReducer} from "./comments";
import {postsReducer} from "./posts";

export const rootReducer = combineReducers({
  posts: postsReducer,
  comment: commentReducer,
})