import React from "react";

interface IProps {
  firstProp: string;
}

type TMyType<T> = T extends React.ComponentType<infer E> ? E : T; 

type PropsType = TMyType<typeof HomeComponent>;


const HomeComponent: React.ComponentType<IProps> = (props: PropsType) => {
  return (
    <div>
      {props.firstProp}
    </div>
  )
}

