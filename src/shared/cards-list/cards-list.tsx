import React, {useContext} from "react";
import {PostsContext} from "../../context/posts-context/context";
import {merge} from "../../utils/merge";
import {Card} from "./card/card";

export function CardsList() {
  const handleItemClick = (id: string) => {
    console.log(id);
  }
  
  const postData = useContext(PostsContext);

  return (
    <ul>
      {
        postData.map(merge({onClick: handleItemClick})).map(item => {
          return <Card post={item.data} key={item.data.id}/>
        })
      }
    </ul>
  )
}