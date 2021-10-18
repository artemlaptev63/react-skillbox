import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {PostData} from "../context/posts-context/context";
import {useAppSelector} from "./use-selector";

type PostDataResponse = {
  data: {
    children: Array<PostData>;
  }
}

export function usePostData()  {
  const token = useAppSelector(state => state.token);
  const [postData, setPostData] = useState<Array<PostData>>([]);

  useEffect(() => {
    if(token) {
      axios.get<PostDataResponse>("https://oauth.reddit.com/best?sr_detail=true", {
        headers: {
          Authorization: `bearer ${token}`
        }
      }).then(({data}: AxiosResponse<PostDataResponse>) => {
        setPostData(data.data.children);
      }).catch(console.log)
    }
  }, [token]);

  return postData;
}