import React from "react";
import styles from "./user-name.css";

type UserNameProps = {
  userName: string;
}

export function UserName(props: UserNameProps) {
  return (
    <a href="#user-url" 
       className={styles.userName}>
      {props.userName}
    </a>
  )
}