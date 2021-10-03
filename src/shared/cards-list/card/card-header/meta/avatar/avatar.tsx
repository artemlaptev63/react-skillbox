import React from "react";
import styles from "./avatar.css";

type AvatarProps = {
  avatar: string;
}

export function Avatar(props: AvatarProps) {
  return (
    <img className={styles.avatar} 
         alt="avatar"
         src={props.avatar}/>
  )
}