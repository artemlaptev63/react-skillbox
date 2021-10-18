import {createSlice} from "@reduxjs/toolkit";
import {Post} from "../../context/posts-context/context";

const initialState: Post[] = [];

const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state = action.payload;
    },
  }
});

export const postsReducer = postsSlice.reducer;
export const {setPosts} = postsSlice.actions;
