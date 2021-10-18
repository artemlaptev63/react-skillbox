import React, {ChangeEvent, FormEvent} from "react";
import {useAppDispatch} from "../../../../hooks/use-dispatch";
import {useAppSelector} from "../../../../hooks/use-selector";
import {setComment} from "../../../../reducers/comments";
import {PostCommentForm} from "../form/form";

export function CommentFormContainer() {
  const comment = useAppSelector(state => state.comment);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(comment);
    dispatch(setComment(""));
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setComment(e.target.value))
  }

  return (
    <PostCommentForm comment={comment} 
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}/>
  )
}