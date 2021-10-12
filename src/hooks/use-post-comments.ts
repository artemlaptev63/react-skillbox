import axios, {AxiosResponse} from "axios";
import {useContext, useEffect, useState} from "react";
import {Post} from "../context/posts-context/context";
import {TokenContext} from "../context/token-context/context";

export type TComment = {
  data: {
    author: string;
    created: number;
    body: string;
    id: string;
    replies: CommentResponse | string;
  }
}

export type CommentResponse = {
  data: {
    children: TComment[]
  }
}

type CommentsResponse = [Post, CommentResponse];

export function usePostComments(postId: string) {
  const token = useContext(TokenContext);
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    if(token) {
        axios.get<CommentsResponse>(`https://oauth.reddit.com/comments/${postId}?limit=10&depth=0&showmore=false`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      }).then((res: AxiosResponse<CommentsResponse>) => {
        setComments(res.data[1].data.children);
      }).catch(console.log)
    }
  }, [token]);

  return {
    comments
  }
}