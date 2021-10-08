import React from "react";
import {IconProps} from "../types";

export function DotsIcon(props: IconProps) {
  const {className = "", height = "5", width = "20"} = props;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
      <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
      <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
    </svg>
  )
}
