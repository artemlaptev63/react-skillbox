import React from "react";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/header/header";
import {Layout} from "./shared/layout/layout";
import {Content} from "./shared/content/content";
import {CardsList} from "./shared/cards-list/cards-list";
import {TokenContextProvider} from "./context/token-context/provider";
import {UserContextProvider} from "./context/user-context/provider";
import {PostsContextProvider} from "./context/posts-context/provider";
import "./main.global.css";

function AppComponent() {
  return (
    <TokenContextProvider>
      <UserContextProvider>
        <Layout>
          <Header/>
          <Content>
            <PostsContextProvider>
              <CardsList/>
            </PostsContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </TokenContextProvider>
  )
}

export const App = hot(() => <AppComponent/>);
