import React from "react";
import {Tag} from "../../../../common/tag/tag";
import {Colors, Text} from "../../../../common/text/text";
import {CreatedAt} from "../../card/card-header/created-at/created-at";
import {CardMeta} from "../../card/card-header/meta/meta";
import {wasDeleted} from "../comment";
import styles from "./comment-info.css";

type CommentInfoProps = {
  author: string;
  created: number;
}

export function CommentInfo(props: CommentInfoProps) {
  return (
    <div className={styles.commentHeader}>
      {getUserName(props.author)}
      <CreatedAt className={styles.createdAt} 
                 createdAt={props.created}/>
      <Tag className={styles.tag}>
        Лига чемпионов
      </Tag>
    </div>
  )
}

const getUserName = (userName: string) => {
  return wasDeleted(userName, "[deleted]") ?
    <Text size={14} color={Colors.gray66}>[Пользователь удален]</Text> :
    <CardMeta avatar={""} userName={userName}
              className={styles.meta}/>
}
