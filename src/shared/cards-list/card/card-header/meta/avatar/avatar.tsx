import React, {useState} from "react";
import {Icon} from "../../../../../../icons";
import {EIcons} from "../../../../../../icons/types";
import styles from "./avatar.css";

type AvatarProps = {
  avatar: string;
}

export function Avatar(props: AvatarProps) {
  const [error, setError] = useState(false);
  return (
    <>
      {
        !error ? (
          <img className={styles.avatar}
               src={props.avatar}
               alt="avatars"
               onError={(e) => setError(true)}/>
        ) : (
          <Icon height="20" width="20" iconName={EIcons.AVATAR_PLACEHOLDER} />
        )
      }
    </>
  )
}