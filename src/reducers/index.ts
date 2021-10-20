import {combineReducers} from "@reduxjs/toolkit";
import {postsReducer} from "./posts";
import {tokenReducer} from "./token";
import {userDataReducer} from "./user-data";

export const rootReducer = combineReducers({
  posts: postsReducer,
  token: tokenReducer,
  userData: userDataReducer,
})