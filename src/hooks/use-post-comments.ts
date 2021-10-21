import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {Post} from "../reducers/posts";
import {useAppSelector} from "./use-selector";

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

export function usePost(postId: string) {
  const token = useAppSelector(state => state.token);
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    if(token) {
        axios.get<CommentsResponse>(`https://oauth.reddit.com/comments/${postId}?limit=10&depth=0&showmore=false`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      }).then((res: AxiosResponse<CommentsResponse>) => {
        console.log(res);
        setComments(res.data[1].data.children);
      }).catch(console.log)
    }
  }, [token]);

  return {
    comments
  }
}