import React from "react";
import styles from "./created-at.css";

type CreatedAtProps = {
  createdAt: number;
}

export function CreatedAt(props: CreatedAtProps) {
  const data = new Date(props.createdAt);
  const date = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  return (
    <div className={styles.container}>
      <span className={styles.createdAt}>
        <span className={styles.label}>Опубликовано</span>
        {`${date < 10 ? `0${date}` : date}/${month < 10 ? `0${month}` : month}/${year}`}
      </span>
    </div>
  )
}