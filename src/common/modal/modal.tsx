import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {useHistory} from "react-router";
import {WithChildren} from "../../../types/common";
import styles from "./modal.css";

export function Modal(props: WithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  const node = document.getElementById("root-modal");
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push("/");
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, []);

  if(!node) return null;
  
  return ReactDOM.createPortal((
    <div ref={ref} className={styles.modal}>
      {props.children}
    </div>
  ), node)
}