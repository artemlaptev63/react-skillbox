import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import {WithChildren} from "../../../types/common";
import {noop} from "../../utils/noop";
import styles from "./modal.css";

type ModalProps = WithChildren & {
  onClose?(): void;
}

export function Modal(props: ModalProps) {
  const {onClose = noop} = props;
  const ref = useRef<HTMLDivElement>(null);
  const node = document.getElementById("root-modal");

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose();
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