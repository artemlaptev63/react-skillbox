import React from "react";
import {CommentIcon} from "../../../../../icons/comment";
import styles from "./comments.css";

type CommentsProps = {

}

export function Comments(props: CommentsProps) {
  return (
    <div className={styles.container}>
      <button>
        <CommentIcon/>
      </button>
      <span className={styles.count}>
        23
      </span>
    </div>
  )
}