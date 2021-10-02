import React from "react";
import styles from "./created-at.css";

type CreatedAtProps = {

}

export function CreatedAt(props: CreatedAtProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.label}>Опубликовано</span>
      4 часа назад
    </span>
  )
}