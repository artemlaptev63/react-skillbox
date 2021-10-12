import React from "react";
import {noop} from "../../utils/noop";

type CommentContextValue = {
  setComment(value: string): void;
  comment: string;
}

const initialValue: CommentContextValue = {
  setComment: noop,
  comment: "",
}

export const CommentContext = React.createContext<CommentContextValue>(initialValue);