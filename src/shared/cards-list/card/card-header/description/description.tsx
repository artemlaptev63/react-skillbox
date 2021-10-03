import React from "react";
import styles from "./description.css";

type DescriptionProps = {
  description: string;
}

export function Description(props: DescriptionProps) {
  return (
    <a href="#post-url" className={styles.link}>
      <span className={styles.description}>
        {props.description}
      </span>
    </a>
  )
}