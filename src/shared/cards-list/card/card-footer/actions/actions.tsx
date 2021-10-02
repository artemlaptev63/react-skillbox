import React from "react";
import {ArrowIcon} from "../../../../../icons/arrow";
import {RemoveIcon} from "../../../../../icons/remove";
import {ShareIcon} from "../../../../../icons/share";
import styles from "./actions.css";

type CardActionsProps = {

}

export function CardActions(props: CardActionsProps) {
  return (
    <div className={styles.container}>
      <button>
        <ArrowIcon/>
      </button>
      <button>
        <ShareIcon/>
      </button>
      <button>
        <RemoveIcon/>
      </button>
    </div>
  )
}