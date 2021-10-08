import React from "react";
import {Icon} from "../../../../../icons";
import {EIcons} from "../../../../../icons/types";
import styles from "./likes.css";

type LikesProps = {
  likes: number;
}

export function Likes(props: LikesProps) {
  return (
    <div className={styles.container}>
      <button className={styles.up}>
        <Icon iconName={EIcons.ARROW_UP}/>
      </button>
      <span className={styles.count}>{props.likes}</span>
      <button className={styles.down}>
        <Icon iconName={EIcons.ARROW_DOWN}/>
      </button>
    </div>
  )
}