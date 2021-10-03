import React from "react";
import {ArrowDownIcon} from "../../../../../icons/arrow-down";
import {ArrowUpIcon} from "../../../../../icons/arrow-up";
import styles from "./likes.css";

type LikesProps = {
  likes: number;
}

export function Likes(props: LikesProps) {
  return (
    <div className={styles.container}>
      <button className={styles.up}>
        <ArrowUpIcon/>
      </button>
      <span className={styles.count}>{props.likes}</span>
      <button className={styles.down}>
        <ArrowDownIcon/>
      </button>
    </div>
  )
}