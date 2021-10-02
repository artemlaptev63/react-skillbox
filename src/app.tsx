import React from "react";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/header/header";
import {Layout} from "./shared/layout/layout";
import "./main.global.css";
import {Content} from "./shared/content/content";
import {CardsList} from "./shared/cards-list/cards-list";

function AppComponent() {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  )
}

export const App = hot(AppComponent);
