import React from "react";
import {SearchBlock} from "./search-block/search-block";
import {SortBlock} from "./sort-block/sort-block";
import {ThreadTitle} from "./thread-title/thread-title";
import styles from "./header.css";

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  )
}
