import React from "react";
import styles from "./body.css";

type CommentBodyProps = {
  body: string;
}

export function CommentBody(props: CommentBodyProps) {
  return (
    <div className={styles.body}>
      {getComment(props.body)}
    </div>
  )
}

export const wasDeleted = (value: string, condition: string) => {
  return value === condition;
}

const getComment = (comment: string) => {
  return wasDeleted(comment, "[removed]") ?
    "Комментарий был удален" : comment;
}