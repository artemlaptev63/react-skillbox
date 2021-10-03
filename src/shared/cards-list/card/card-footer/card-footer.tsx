import React from "react";
import {CardActions} from "./actions/actions";
import styles from "./card-footer.css";
import {Comments} from "./comments/comments";
import {Likes} from "./likes/likes";

type CardFooterProps = {
  likes: number;
  comments: number;
}

export function CardFooter(props: CardFooterProps) {
  return (
    <div className={styles.container}>
      <Likes likes={props.likes}/>
      <Comments comments={props.comments}/>
      <CardActions/>
    </div>
  )
}