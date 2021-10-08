import React from "react";
import {IconProps} from "../types";

export function ArrowUpIcon(props: IconProps) {
  const {className = "", height = "10", width = "19"} = props;
  return (
    <svg width={width} height={height} className={props.className} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
    </svg>
  )
}