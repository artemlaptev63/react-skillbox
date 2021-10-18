import {createSlice} from "@reduxjs/toolkit";

const initialState = "";

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action) => {
      return action.payload
    },
  }
});

export const commentReducer = commentSlice.reducer;
export const {setComment} = commentSlice.actions;
