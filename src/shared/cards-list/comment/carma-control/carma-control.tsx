import React from "react";
import {Icon} from "../../../../icons";
import {EIcons} from "../../../../icons/types";
import styles from "./carma-control.css";

export function CarmaControls() {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.icons}>
        <Icon iconName={EIcons.ARROW_UP} className={styles.arrowTop}/>
        <Icon iconName={EIcons.ARROW_DOWN} className={styles.arrowDown}/>
      </div>
      <div className={styles.border}/>
    </div>
  )
}
