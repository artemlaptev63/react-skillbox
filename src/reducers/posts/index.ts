import {createSlice} from "@reduxjs/toolkit";
import {getPosts} from "../../actions/posts";

export type Post = {
  created: number;
  author: string;
  id: string;
  num_comments: number;
  score: number;
  thumbnail: string;
  title: string;
  url: string;
  sr_detail: SrDetail;
}

type SrDetail = {
  icon_img: string;
}

export type PostData = {
  data: Post;
}

export type PostDataResponse = {
  data: {
    children: Array<PostData>;
    after: string;
  }
}

type PostsState = {
  data: {
    children: Array<PostData>;
    after: string;
  };
  error: string;
  loading: boolean;
} 

const initialState: PostsState = {
  data: {
    after: "",
    children: []
  },
  error: "",
  loading: false,
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending.type]: (state) => {
      state.loading = true;
    },
    [getPosts.rejected.type]: function (state, action) {
      state.loading = false;
      state.error = action.error.message;
    },
    [getPosts.fulfilled.type]: function (state, action) {
      state.data.after = action.payload.after;
      state.data.children = [...state.data.children, ...action.payload.children];
      state.loading = false;
      state.error = "";
    },
  }
})

export const postsReducer = postsSlice.reducer;

