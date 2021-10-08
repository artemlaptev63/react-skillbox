import React from "react";
import styles from "./search-block.css";
import {UserBlock} from "./user-block/user-block";

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock/>
    </div>
  )
}
