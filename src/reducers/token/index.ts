import {createSlice} from "@reduxjs/toolkit";

const initialState: string = "";

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
  }
});

export const tokenReducer = tokenSlice.reducer;
export const {setToken} = tokenSlice.actions;
