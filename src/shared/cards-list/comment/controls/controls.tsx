import React from "react";
import {Colors, Text} from "../../../../common/text/text";
import {Icon} from "../../../../icons";
import {EIcons} from "../../../../icons/types";
import styles from "./controls.css";

type CommentControlsProps = {
  show(): void;
  isVisible: boolean;
}

export function CommentControls(props: CommentControlsProps) {
  return (
    <>
      {
        props.isVisible && (
          <div className={styles.controls}>
            <div className={styles.controlContainer} onClick={props.show}>
              <Icon iconName={EIcons.COMMENT} className={styles.icon}/>
              <Text size={14} color={Colors.gray66}>Ответить</Text> 
            </div>
            <div className={styles.controlContainer}>
              <Icon iconName={EIcons.SHARE_STROKE} className={styles.icon}/>
              <Text size={14} color={Colors.gray66}>Поделиться</Text>
            </div>
            <div className={styles.controlContainer}>
              <Icon iconName={EIcons.COMPLAIN} className={styles.icon}/>
              <Text size={14} color={Colors.gray66}>Пожаловаться</Text>
            </div>
          </div>
        )
      }
    </>
    
  )
}
