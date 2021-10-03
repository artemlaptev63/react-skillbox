import React from "react";
import styles from "./card-preview.css";

type CardPreviewProps = {
  src: string;
}

export function CardPreview(props: CardPreviewProps) {
  return (
    <div className={styles.preview}
         style={{backgroundImage: `url(${props.src})`}}/>
  )
}