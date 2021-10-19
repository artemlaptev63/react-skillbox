import React from "react";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/header/header";
import {Layout} from "./shared/layout/layout";
import {Content} from "./shared/content/content";
import {CardsList} from "./shared/cards-list/cards-list";
import {PostsContextProvider} from "./context/posts-context/provider";
import "./main.global.css";
import {Provider} from "react-redux";
import {store} from "./store";
import {useToken} from "./hooks/use-token";
import {useUserData} from "./hooks/use-user-data";

function AppComponent() {
  useToken();
  useUserData();
  return (
    <Layout>
      <Header/>
      <Content>
        <PostsContextProvider>
          <CardsList/>
        </PostsContextProvider>
      </Content>
    </Layout>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent/>
  </Provider>
));
