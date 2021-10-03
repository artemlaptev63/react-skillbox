import React from "react";
import styles from "./card-header.css";
import {CreatedAt} from "./created-at/created-at";
import {Description} from "./description/description";
import {CardMeta} from "./meta/meta";

type CardHeaderProps = {
  userName: string;
  createdAt: string;
  description: string;
  avatar: string;
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
          <Description description={props.description}/>
        </div>
      </div>
    </div>
  )
}