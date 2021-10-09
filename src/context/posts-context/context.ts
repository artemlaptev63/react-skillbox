import React from "react";

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

export const PostsContext = React.createContext<Array<PostData>>([]);