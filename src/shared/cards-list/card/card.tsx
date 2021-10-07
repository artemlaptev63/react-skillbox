import React from "react";
import {Post} from "../cards-list";
import {CardFooter} from "./card-footer/card-footer";
import {CardHeader} from "./card-header/card-header";
import {CardPreview} from "./card-preview/card-preview";
import styles from "./card.css";
import {CardMenu} from "./card-dropdown/card-dropdown";

type CardProps = {
  post: Post;
}

export function Card({post}: CardProps) {
  return (
    <li className={styles.card}>
      <CardHeader avatar={post.avatar} 
                  createdAt={post.createdAt} 
                  userName={post.userName} 
                  description={post.description}/>
      <CardPreview src={post.src}/>
      <CardFooter likes={post.likesCount} comments={post.commentsCount}/>
      <CardMenu/>
    </li>
  )
}