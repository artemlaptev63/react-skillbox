import React from "react";
import styles from "./user-name.css";

type UserNameProps = {}

export function UserName(props: UserNameProps) {
  return (
    <a href="#user-url" 
       className={styles.userName}>
      Дмитрий Гришин
    </a>
  )
}