import React from "react";
import {Icon} from "../../../../../icons";
import {CommentIcon} from "../../../../../icons/comment";
import {EIcons} from "../../../../../icons/types";
import styles from "./comments.css";

type CommentsProps = {
  comments: number;
}

export function Comments(props: CommentsProps) {
  return (
    <div className={styles.container}>
      <button>
        <Icon iconName={EIcons.COMMENT}/>
      </button>
      <span className={styles.count}>
        {props.comments}
      </span>
    </div>
  )
}