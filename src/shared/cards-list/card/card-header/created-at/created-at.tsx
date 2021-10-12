import React from "react";
import styles from "./created-at.css";

type CreatedAtProps = {
  createdAt: number;
  className?: string;
}

export function CreatedAt(props: CreatedAtProps) {
  const data = new Date(props.createdAt);
  const date = data.getDate();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  return (
    <div className={`${styles.container} ${props.className}`}>
      <span className={styles.createdAt}>
        <span className={styles.label}>Опубликовано</span>
        {`${date < 10 ? `0${date}` : date}/${month < 10 ? `0${month}` : month}/${year}`}
      </span>
    </div>
  )
}