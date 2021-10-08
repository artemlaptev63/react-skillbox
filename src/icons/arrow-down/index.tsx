import React from "react";
import {IconProps} from "../types";

export function ArrowDownIcon(props: IconProps) {
  const {className = "", height = "10", width = "19"} = props;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
    </svg>
  )
}