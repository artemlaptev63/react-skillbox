import React from "react";
import {Avatar} from "./avatar/avatar";
import styles from "./meta.css";
import {UserName} from "./user-name/user-name";

type CardMetaProps = {
  avatar: string;
  userName: string;
}

export function CardMeta(props: CardMetaProps) {
  return (
    <div className={styles.meta}>
      <Avatar avatar={props.avatar}/>
      <UserName userName={props.userName}/>
    </div>
  )
}