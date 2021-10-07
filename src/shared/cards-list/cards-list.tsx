import React from "react";
import {Card} from "./card/card";

type CardsListProps = {
  posts: Array<Post>;
}

export type Post = {
  userName: string;
  createdAt: string;
  src: string;
  description: string;
  avatar: string;
  likesCount: number;
  commentsCount: number;
  id: string;
}

export function CardsList(props: CardsListProps) {
  return (
    <ul>
      {
        props.posts.map(item => {
          return <Card post={item} key={item.id}/>
        })
      }
    </ul>
  )
}