import React from "react";
import {WithChildren} from "../../../types/common";
import {usePostData} from "../../hooks/use-post-data";
import {PostsContext} from "./context";


export function PostsContextProvider(props: WithChildren) {
  const postData = usePostData();
  return (
    <PostsContext.Provider value={postData}>
      {props.children}
    </PostsContext.Provider>
  )
}