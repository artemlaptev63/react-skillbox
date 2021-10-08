import React from "react";
import {Icon} from "../../../../../icons";
import {EIcons} from "../../../../../icons/types";
import styles from "./actions.css";

export function CardActions() {
  return (
    <div className={styles.container}>
      <button>
        <Icon iconName={EIcons.ARROW}/>
      </button>
      <button>
        <Icon iconName={EIcons.SHARE}/>
      </button>
      <button>
        <Icon iconName={EIcons.REMOVE}/>
      </button>
    </div>
  )
}