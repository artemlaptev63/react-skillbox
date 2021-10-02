import React from "react";
import {Avatar} from "./avatar/avatar";
import styles from "./meta.css";
import {UserName} from "./user-name/user-name";

type CardMetaProps = {}

export function CardMeta(props: CardMetaProps) {
  return (
    <div className={styles.meta}>
      <Avatar/>
      <UserName/>
    </div>
  )
}