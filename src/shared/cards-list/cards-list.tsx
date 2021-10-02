import React from "react";
import {Card} from "./card/card";
import styles from "./cards-list.css";

type CardsListProps = {

}

export function CardsList(props: CardsListProps) {
  return (
    <ul className={styles.cardsList}>
      <Card/>
    </ul>
  )
}