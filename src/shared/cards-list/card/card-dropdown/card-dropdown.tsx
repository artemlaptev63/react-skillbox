import React from "react";
import {Dropdown} from "../../../../common/dropdown/dropdown";
import {GenericList, Item} from "../../../../common/generic-list";
import {Icon} from "../../../../icons";
import {EIcons} from "../../../../icons/types";
import {merge} from "../../../../utils/merge";
import {noop} from "../../../../utils/noop";
import {pipe} from "../../../../utils/pipe";
import {generateId} from "../../../../utils/random-string";
import {CardDropdownButton} from "./button/button";
import styles from "./card-dropdown.css";

const LIST = [
  {
    text: "Комментарии",
    Icon: <Icon className={styles.icon} 
                iconName={EIcons.COMMENT}/>,
    extraClassName: styles.hidenItem,
  },
  {
    text: "Поделиться",
    Icon: <Icon className={styles.icon} 
                iconName={EIcons.SHARE_STROKE}/>,
    extraClassName: styles.hidenItem,
  },
  {
    text: "Скрыть",
    Icon: <Icon className={styles.icon} 
                iconName={EIcons.HIDE}/>,
  },
  {
    text: "Сохранить",
    Icon: <Icon className={styles.icon} 
                iconName={EIcons.SAVE}/>,
    extraClassName: styles.hidenItem,
  },
  {
    text: "Пожаловаться",
    Icon: <Icon className={styles.icon} 
                iconName={EIcons.COMPLAIN}/>,
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