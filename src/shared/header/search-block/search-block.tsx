import React, {useContext} from "react";
import {UserContext} from "../../../context/user-context/context";
import {UserBlock} from "./user-block/user-block";
import styles from "./search-block.css";

export function SearchBlock() {
  const data = useContext(UserContext);
  return (
    <div className={styles.searchBlock}>
      <UserBlock username={data.name} avatarSrc={data.icon_img}/>
    </div>
  )
}
