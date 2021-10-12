import React from "react";
import {TComment} from "../../../hooks/use-post-comments";
import {Comment} from "../comment/comment";

type CommentListProps = {
  comments: TComment[];
}

export function CommentsList(props: CommentListProps) {
  return (
    <>
      {
        props.comments.map(comment => {
          return <Comment comment={comment} key={comment.data.id}/>
        })
      }
    </>
  )
}