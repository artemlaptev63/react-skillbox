import React from "react";
import {Card} from "./card/card";
import styles from "./cards-list.css";

type CardsListProps = {

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

const data: Array<Post> = [
  {
    userName: "Дмитрий Гришин",
    createdAt: "4 часа назад",
    src: "https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, rerum quis. Perferendis deserunt ex est numquam maiores debitis in alias dolorum nam sed, a esse qui inventore nulla, tenetur animi.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG1L64HuqyHN4Knl5bLmJagnQPP0ivNZF7Q&usqp=CAU",
    likesCount: 5,
    commentsCount: 23,
    id: "1",
  },
  {
    userName: "Дмитрий Гришин",
    createdAt: "4 часа назад",
    src: "https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, rerum quis. Perferendis deserunt ex est numquam maiores debitis in alias dolorum nam sed, a esse qui inventore nulla, tenetur animi.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG1L64HuqyHN4Knl5bLmJagnQPP0ivNZF7Q&usqp=CAU",
    likesCount: 5,
    commentsCount: 23,
    id: "2",
  }
]

export function CardsList(props: CardsListProps) {
  return (
    <ul className={styles.cardsList}>
      {
        data.map(item => {
          return <Card post={item} key={item.id}/>
        })
      }
    </ul>
  )
}