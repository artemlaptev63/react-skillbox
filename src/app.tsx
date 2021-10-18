import React from "react";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/header/header";
import {Layout} from "./shared/layout/layout";
import {Content} from "./shared/content/content";
import {CardsList} from "./shared/cards-list/cards-list";
import {UserContextProvider} from "./context/user-context/provider";
import {PostsContextProvider} from "./context/posts-context/provider";
import "./main.global.css";
import {Provider} from "react-redux";
import {store} from "./store";
import {useToken} from "./hooks/use-token";

function AppComponent() {
  useToken();
  return (
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
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent/>
  </Provider>
));
