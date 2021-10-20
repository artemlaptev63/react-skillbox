import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosError, AxiosResponse} from "axios";
import {PostDataResponse} from "../../reducers/posts";

type Options = {
  token: string;
  after: string;
}

export const getPosts = createAsyncThunk("GET_POSTS", async(options: Options) => {
  try{
    const response: AxiosResponse<PostDataResponse> = await axios.get("https://oauth.reddit.com/best?sr_detail=true", {
      headers: {
        Authorization: `bearer ${options.token}`
      },
      params: {
        limit: 10,
        after: options.after || undefined,
      }
    });
    return {
      after: response.data?.data?.after || "",
      children: response.data?.data?.children || [],
    };
  } catch(e: unknown) {
    throw new Error((e as AxiosError).message)
  }
});