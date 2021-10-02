import React from "react";
import {DotsIcon} from "../../../../icons/dots";
import styles from "./dropdown.css";

type CardMenuProps = {

}

export function CardMenu(props: CardMenuProps) {
  return (
    <button className={styles.menu}>
      <span className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </span>
    </button>
  )
}