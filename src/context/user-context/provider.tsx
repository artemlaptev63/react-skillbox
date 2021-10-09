import React from "react";
import {WithChildren} from "../../../types/common";
import {useUserData} from "../../hooks/use-user-data";
import {UserContext} from "./context";

export function UserContextProvider(props: WithChildren) {
  const {data} = useUserData();
  
  return (
    <UserContext.Provider value={data}>
      {props.children}
    </UserContext.Provider>
  )
}