import React from "react";

export type UserData = {
  icon_img?: string;
  name?: string;
}

export const UserContext = React.createContext<UserData>({});