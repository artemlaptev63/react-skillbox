import {useStoreActions, useStoreState} from "easy-peasy";
import React, {FormEvent} from "react";
import {StoreType} from "../../../../app";
import styles from "./form.css";

export function PostCommentFormHomework() {
  const value = useStoreState<StoreType>((state) => state.comment.value);
  const setComment = useStoreActions<StoreType>((actions) => actions.comment.setValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(value);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={value}
                className={styles.textarea}/>
      <button type="submit"
              className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}
