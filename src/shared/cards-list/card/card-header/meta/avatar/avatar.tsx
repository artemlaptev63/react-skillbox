import React from "react";
import styles from "./avatar.css";

type AvatarProps = {}

export function Avatar(props: AvatarProps) {
  return (
    <img className={styles.avatar} 
         alt="avatar"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG1L64HuqyHN4Knl5bLmJagnQPP0ivNZF7Q&usqp=CAU"/>
  )
}