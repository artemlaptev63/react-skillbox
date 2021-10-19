import {createSlice} from "@reduxjs/toolkit";

const initialState: string = "";

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken: () => {
      if(window.__token__ && window.__token__ !== "undefined") {
        return window.__token__;
      }
      return "";
    },
  }
});

export const tokenReducer = tokenSlice.reducer;
export const {saveToken} = tokenSlice.actions;
