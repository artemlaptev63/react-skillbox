import React from "react";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/header/header";
import {Layout} from "./shared/layout/layout";
import {Content} from "./shared/content/content";
import {CardsList} from "./shared/cards-list/cards-list";
import "./main.global.css";
import {Provider} from "react-redux";
import {store} from "./store";
import {useToken} from "./hooks/use-token";
import {useUserData} from "./hooks/use-user-data";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {useIsMounted} from "./hooks/is-mounted";
import {Post} from "./shared/cards-list/post/post";

function AppComponent() {
  const [mounted] = useIsMounted();
  useToken();
  useUserData();
  return (
    <>
      {
        mounted && (
          <BrowserRouter>
            <Layout>
              <Header/>
              <Content>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/posts" />
                  </Route>
                  <Route path="/auth">
                    <Redirect to="/posts"/>
                  </Route>
                  <Route path="/posts">
                    <CardsList/>
                  </Route>
                  <Route>
                    404 — страница не найдена
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </BrowserRouter>
        )
      }
    </>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent/>
  </Provider>
));
