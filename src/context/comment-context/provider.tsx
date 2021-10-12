import React, {useState} from "react";
import {WithChildren} from "../../../types/common";
import {CommentContext} from "./context";


export function CommentContextProvider(props: WithChildren) {
  const [comment, setComment] = useState("");
  return (
    <CommentContext.Provider value={{comment, setComment}}>
      {props.children}
    </CommentContext.Provider>
  )
}