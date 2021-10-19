import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError, AxiosResponse} from "axios";
import {UserData} from "../../reducers/user-data";

export const getUserData = createAsyncThunk("GET_USER_DATA", async(token: string) => {
  try{
    const userData: AxiosResponse<UserData> = await axios.get("https://oauth.reddit.com/api/v1/me", {
      headers: {
        Authorization: `bearer ${token}`
      }
    });
    return userData.data;
  } catch(e: unknown) {
    throw new Error((e as AxiosError).message)
  }
});