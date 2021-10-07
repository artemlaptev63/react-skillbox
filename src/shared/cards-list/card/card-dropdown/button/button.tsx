import React from "react";
import styles from "./button.css";

export function CardDropdownButton() {
  return (
    <button className={styles.menu}>
      <span className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </span>
    </button>
  );
}