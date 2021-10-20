import React from "react";
import styles from "./styles.module.css";

type LoaderProps = {
  small?: boolean;
}

export function Loader(props: LoaderProps) {
  const className = `${styles.loader} ${props.small ? styles.small : ""}`;
  return <div className={className}/>
}