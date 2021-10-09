import React from "react";
import styles from "./description.css";

type DescriptionProps = {
  description: string;
  postUrl: string;
}

export function Description(props: DescriptionProps) {
  return (
    <a href={props.postUrl} target="_blank" className={styles.link}>
      <span className={styles.description}>
        {props.description}
      </span>
    </a>
  )
}