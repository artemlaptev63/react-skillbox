import {AnyAction, Dispatch, Middleware} from "redux";

export const ping: Middleware<{}, any, Dispatch<AnyAction>> = (store) => (next) => (action) => {
  console.log("ping");
  next({...action});
}

export const pong: Middleware<{}, any, Dispatch<AnyAction>> = (store) => (next) => (action) => {
  console.log("dispatch", action);
  next({...action});
}