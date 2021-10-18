import React, {ChangeEvent, FormEvent} from "react";
import styles from "./form.css";

type PostCommentFormProps = {
  comment: string;
  handleChange(e: ChangeEvent<HTMLTextAreaElement>): void;
  handleSubmit(e: FormEvent): void;
}

export function PostCommentForm(props: PostCommentFormProps) {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <textarea value={props.comment}
                onChange={props.handleChange}
                className={styles.textarea}/>
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  )
}