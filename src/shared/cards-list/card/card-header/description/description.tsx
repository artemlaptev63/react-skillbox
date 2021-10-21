import React from "react";
import {Link} from "react-router-dom";
import styles from "./description.css";

type DescriptionProps = {
  description: string;
  postUrl: string;
  postId: string;
}

export function Description(props: DescriptionProps) {
  return (
    <Link to={`/posts/${props.postId}`} className={styles.link}>
      <span className={styles.description}>
        {props.description}
      </span>
    </Link>
  )
}