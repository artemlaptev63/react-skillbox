import React from "react";
import {CardFooter} from "./card-footer/card-footer";
import {CardHeader} from "./card-header/card-header";
import {CardPreview} from "./card-preview/card-preview";
import {CardMenu} from "./card-dropdown/card-dropdown";
import {Post} from "../../../context/posts-context/context";
import styles from "./card.css";

type CardProps = {
  post: Post;
}

export function Card({post}: CardProps) {
  return (
    <li className={styles.card}>
      <CardHeader avatar={post.sr_detail.icon_img} 
                  createdAt={post.created} 
                  userName={post.author} 
                  description={post.title}
                  postUrl={post.url}
                  postId={post.id}/>
      <CardPreview src={post.thumbnail}/>
      <CardFooter likes={post.score} comments={post.num_comments}/>
      <CardMenu/>
    </li>
  )
}