import React from "react";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/header/header";
import {Layout} from "./shared/layout/layout";
import "./main.global.css";
import {Content} from "./shared/content/content";
import {CardsList, Post} from "./shared/cards-list/cards-list";
import {generateId} from "./utils/random-string";
import {merge} from "./utils/merge";
import {Dropdown} from "./common/dropdown/dropdown";

const data: Array<Post> = [
  {
    userName: "Дмитрий Гришин",
    createdAt: "4 часа назад",
    src: "https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, rerum quis. Perferendis deserunt ex est numquam maiores debitis in alias dolorum nam sed, a esse qui inventore nulla, tenetur animi.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOG1L64HuqyHN4Knl5bLmJagnQPP0ivNZF7Q&usqp=CAU",
    likesCount: 5,
    commentsCount: 23,
  },
].map(generateId)

function AppComponent() {
  const handleItemClick = (id: string) => {
    console.log(id);
  }
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList posts={data.map(merge({onClick: handleItemClick}))}/>
      </Content>
    </Layout>
  )
}

export const App = hot(AppComponent);
