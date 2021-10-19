import {createSlice} from "@reduxjs/toolkit";
import {getUserData} from "../../actions/user-data";

export type UserData = {
  icon_img?: string;
  name?: string;
}

type UserDataState = {
  userData: UserData;
  error: string;
  loading: boolean;
}

const initialState: UserDataState = {
  userData: {
    icon_img: "",
    name: "",
  },
  error: "",
  loading: false,
}

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserData.pending.type]: (state) => {
      state.loading = true;
    },
    [getUserData.rejected.type]: function (state, action) {
      state.loading = false;
      state.error = action.error.message;
    },
    [getUserData.fulfilled.type]: function (state, action) {
      state.userData = action.payload;
      state.loading = false;
      state.error = "";
    },
  }
})

export const userDataReducer = userDataSlice.reducer;
