import React from "react";
import styles from "./card-header.css";
import {CreatedAt} from "./created-at/created-at";
import {Description} from "./description/description";
import {CardMeta} from "./meta/meta";

type CardHeaderProps = {
  userName: string;
  createdAt: number;
  description: string;
  avatar: string;
  postUrl: string;
}

export function CardHeader(props: CardHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.cardHeaderContainer}>
        <div className={styles.postMetaContainer}>
          <CardMeta userName={props.userName} avatar={props.avatar}/>
          <CreatedAt createdAt={props.createdAt}/>
        </div>
        <div className={styles.descriptionContainer}>
          <Description postUrl={props.postUrl} description={props.description}/>
        </div>
      </div>
    </div>
  )
}