import React from "react";
import {CardMenu} from "../dropdown/dropdown";
import styles from "./card-header.css";
import {CreatedAt} from "./created-at/created-at";
import {Description} from "./description/description";
import {CardMeta} from "./meta/meta";

type CardHeaderProps = {

}

export function CardHeader(props: CardHeaderProps) {
  return (
    <div className={styles.cardHeaderContainer}>
      <div className={styles.postMetaContainer}>
        <div className={styles.meta}>
          <CardMeta/>
        </div>
        <div className={styles.createdAt}>
          <CreatedAt/>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <Description/>
      </div>
    </div>
  )
}