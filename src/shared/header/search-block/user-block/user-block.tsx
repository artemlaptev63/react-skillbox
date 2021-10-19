import React from "react";
import {Colors, Text} from "../../../../common/text/text";
import {DURATION, RANDOM_STRING, REDIRECT_URI, RESPONSE_TYPE, SCOPE_STRING} from "../../../../constants";
import {Icon} from "../../../../icons";
import {EIcons} from "../../../../icons/types";
import styles from "./user-block.css";

type UserBlockProps = {
  username?: string;
  avatarSrc?: string
  loading: boolean;
}

export function UserBlock(props: UserBlockProps) {
  const authHref = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE_STRING}`
  return (
    <a href={authHref} className={styles.userBox}>
      <div className={styles.avatarBox}>
        {
          props.avatarSrc ? (
            <img src={props.avatarSrc} alt="avatar" className={styles.avatarImage}/>
          ) : (
            <Icon iconName={EIcons.AVATAR_PLACEHOLDER}/>
          )
        }
        
      </div>
      <div className={styles.username}>
        {
          props.loading ? (
            <Text size={20} color={Colors.gray99}>Загрузка...</Text>
          ) : (
            <Text size={20} color={props.username ? Colors.black : Colors.gray99}>{props.username || "Аноним"}</Text>
          )
        }
      </div>
    </a>
  )
}
