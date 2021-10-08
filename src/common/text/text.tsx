import React, {ReactNode} from "react";
import styles from "./text.css";
import classNames from "classnames";

type Sizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum Colors {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  grayF4 = "grayF4",
  grayF3 = "grayF3",
  grayD9 = "grayD9",
  grayC4 = "grayC4",
  gray99 = "gray99",
  gray66 = "gray66",
}

type TextProps = {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "div";
  children: ReactNode;
  size: Sizes;
  mobileSize?: Sizes;
  tableSize?: Sizes;
  desktopSize?: Sizes;
  color?: Colors;
  bold?: boolean;
}

export function Text(props: TextProps) {
  const {As = "span", color = Colors.black, bold = false} = props;
  const classes = classNames(
    styles[`s${props.size}`],
    {[styles.bold]: props.bold},
    {[styles[`m${props.mobileSize}`]]: props.mobileSize},
    {[styles[`t${props.tableSize}`]]: props.tableSize},
    {[styles[`d${props.desktopSize}`]]: props.desktopSize},
    styles[color],
  )

  return (
    <As className={classes}>
      {props.children}
    </As>
  )
}