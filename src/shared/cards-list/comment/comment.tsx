import React, {useState} from "react";
import {CommentResponse, TComment} from "../../../hooks/use-post-comments";
import {CommentsList} from "../comments-list/comments-list";
import {CommentBody} from "./body/body";
import {CarmaControls} from "./carma-control/carma-control";
import {CommentInfo} from "./comment-info/comment-info";
import styles from "./comment.css";
import {CommentControls} from "./controls/controls";
import {ControlledCommentForm} from "./form/form";

type CommentProps = {
  comment: TComment;
}

export function Comment(props: CommentProps) {
  const [isTextareaVisible, setTextareaVisible] = useState<boolean>(false);

  if(!props.comment) {
    return null;
  }

  const shouldRenderSubList = () => {
    return typeof props.comment.data.replies !== "string";
  }

  const showForm = () => {
    setTextareaVisible(true);
  }

  const reply = (commentValue: string) => {
    if(commentValue) {
      alert(commentValue);
      setTextareaVisible(false);
    }
  }

  const close = () => {
    setTextareaVisible(false);
  }

  return (
    <div className={styles.comment}>
      <CarmaControls/>
      <div className={styles.container}>
        <CommentInfo author={props.comment.data.author}
                     created={props.comment.data.created}/>
        <CommentBody body={props.comment.data.body}/>
        <CommentControls show={showForm} isVisible={!wasDeleted(props.comment.data.author, "[deleted]")}/>
        <ControlledCommentForm author={props.comment.data.author}
                               isVisible={isTextareaVisible} 
                               hide={close} reply={reply}/>
        <div className={styles.commentsList}>
          {
            shouldRenderSubList() && (
              <CommentsList comments={(props.comment.data.replies as CommentResponse).data.children}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export const wasDeleted = (value: string, condition: string) => {
  return value === condition;
}
