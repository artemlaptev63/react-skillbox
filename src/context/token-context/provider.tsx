import React from "react";
import {WithChildren} from "../../../types/common";
import {useToken} from "../../hooks/use-token";
import {TokenContext} from "./context";

export function TokenContextProvider(props: WithChildren) {
  const {token} = useToken();
  return (
    <TokenContext.Provider value={token}>
      {props.children}
    </TokenContext.Provider>
  )
}