import React from "react";
import {WithChildren} from "../../../types/common";
import {Text} from "../text/text";
import styles from "./tag.css";

type TagProps = WithChildren & {
  className?: string;
}

export function Tag(props: TagProps) {
  return (
    <div className={`${styles.tag} ${props.className}`}>
      <Text size={14}>
        {props.children}
      </Text>
    </div>
  )
}