import React from "react";
import {Dropdown} from "../../../../common/dropdown/dropdown";
import {GenericList, Item} from "../../../../common/generic-list";
import {CommentIcon} from "../../../../icons/comment";
import {ComplainIcon} from "../../../../icons/complain";
import {HideIcon} from "../../../../icons/hide";
import {SaveIcon} from "../../../../icons/save";
import {ShareStrokeIcon} from "../../../../icons/share/stroke";
import {merge} from "../../../../utils/merge";
import {noop} from "../../../../utils/noop";
import {pipe} from "../../../../utils/pipe";
import {generateId} from "../../../../utils/random-string";
import {CardDropdownButton} from "./button/button";
import styles from "./card-dropdown.css";

const LIST = [
  {
    text: "Комментарии",
    Icon: <CommentIcon className={styles.icon}/>,
    extraClassName: styles.hidenItem,
  },
  {
    text: "Поделиться",
    Icon: <ShareStrokeIcon className={styles.icon}/>,
    extraClassName: styles.hidenItem,
  },
  {
    text: "Скрыть",
    Icon: <HideIcon className={styles.icon}/>,
  },
  {
    text: "Сохранить",
    Icon: <SaveIcon className={styles.icon}/>,
    extraClassName: styles.hidenItem,
  },
  {
    text: "Пожаловаться",
    Icon: <ComplainIcon className={styles.icon}/>,
  },
  {
    text: "Закрыть",
    onClick: noop,
    className: styles.closeButton,
  },
];

export function CardMenu() {
  const handleMenuClick = (id: string) => {
    console.log(id);
  }

  const commonFields = {
    onClick: handleMenuClick, 
    As: "li",
    className: styles.menuItem,
  }

  const list: Array<Item> = LIST.map(pipe(generateId, merge(commonFields)))

  return (
    <div className={styles.dropdownContainer}>
      <Dropdown button={<CardDropdownButton/>}>
        <ul className={styles.list}>
          <GenericList list={list}/>
        </ul>
      </Dropdown>
    </div>
  )
}