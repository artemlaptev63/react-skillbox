import React from "react";
import {UserBlock} from "./user-block/user-block";
import styles from "./search-block.css";
import {useAppSelector} from "../../../hooks/use-selector";

export function SearchBlock() {
  const {userData, loading} = useAppSelector(state => state.userData);
  return (
    <div className={styles.searchBlock}>
      <UserBlock username={userData.name} avatarSrc={userData.icon_img} loading={loading}/>
    </div>
  )
}
