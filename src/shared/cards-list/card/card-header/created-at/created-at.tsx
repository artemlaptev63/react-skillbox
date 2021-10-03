import React from "react";
import styles from "./created-at.css";

type CreatedAtProps = {
  createdAt: string;
}

export function CreatedAt(props: CreatedAtProps) {
  return (
    <div className={styles.container}>
      <span className={styles.createdAt}>
        <span className={styles.label}>Опубликовано</span>
        {props.createdAt}
      </span>
    </div>
  )
}