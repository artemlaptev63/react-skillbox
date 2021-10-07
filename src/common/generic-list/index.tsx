import React from "react";

export type Item = {
  id: string;
  text: string;
  onClick(id: string): void;
  As: "a" | "li" | "button" | "div";
  Icon?: React.ReactNode;
  className?: string;
  extraClassName?: string;
  href?: string;
}

type GenericListProps = {
  list: Array<Item>;
}

export function GenericList(props: GenericListProps) {
  return (
    <>
      {
        props.list.map(({extraClassName, As, className, id, onClick, text, href, Icon}) => {
          return (
            <As className={`${className} ${extraClassName}`} 
                key={id} 
                onClick={() => onClick(id)}
                href={href}>
              {Icon && <>{Icon}</>}
              {text}
            </As>
          )
        })
      }
    </>
  )
}