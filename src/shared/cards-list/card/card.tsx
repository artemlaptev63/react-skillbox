import React from "react";
import {CardFooter} from "./card-footer/card-footer";
import {CardHeader} from "./card-header/card-header";
import {CardPreview} from "./card-preview/card-preview";
import styles from "./card.css";
import {CardMenu} from "./dropdown/dropdown";

type CardProps = {}

export function Card(props: CardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <CardHeader/>
      </div>
      <div className={styles.preview}>
        <CardPreview/>
      </div>
      <div className={styles.footer}>
        <CardFooter/>
      </div>
      <CardMenu/>
    </li>
  )
}