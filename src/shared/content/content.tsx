import React from "react";
import styles from "./content.css";

type ContentProps = {
  children: React.ReactNode;
}

export function Content(props: ContentProps) {
  return (
    <div className={styles.content}>
      {props.children}
    </div>
  )
}