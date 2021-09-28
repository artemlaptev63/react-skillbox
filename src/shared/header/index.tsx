import React from "react";
import {hot} from "react-hot-loader/root";

const HeaderComponent = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  )
}

export const Header = hot(HeaderComponent);