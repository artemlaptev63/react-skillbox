import React, {FormEvent, useContext} from "react";
import {CommentContext} from "../../../../context/comment-context/context";
import styles from "./form.css";

export function PostCommentForm() {
  const {comment, setComment} = useContext(CommentContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(comment);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea value={comment}
                onChange={e => setComment(e.target.value)}
                className={styles.textarea}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  )
}