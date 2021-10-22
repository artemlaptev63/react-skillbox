import React from "react";
import {PostCommentForm, PostCommentFormValues} from "../form/form";
import {PostCommentFormHomework} from "../homework-form/form";

export function CommentFormContainer() {

  const handleSubmit = (values: PostCommentFormValues) => {
    console.log(values);
  }

  return (
    <>
      {/* <PostCommentForm handleSubmit={handleSubmit}/> */}
      <PostCommentFormHomework/>
    </>
  )
}