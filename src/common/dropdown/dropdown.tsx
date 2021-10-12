import React, {ReactNode, useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {noop} from "../../utils/noop";
import styles from "./dropdown.css";

type DropdownProps = {
  button: ReactNode;
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown(props: DropdownProps) {
  const node = document.getElementById("root-modal");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const {
    button,
    children,
    isOpen,
    onOpen = noop,
    onClose = noop,
  } = props;

  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    const hide = () => setIsVisible(false);

    document.addEventListener("click", hide);
    return () => document.removeEventListener("click", hide);
  }, [])

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    isVisible ? onOpen() : onClose();
  }, [isVisible]);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if(isOpen === undefined) {
      if(!isVisible) {
        const cords = ref.current?.getBoundingClientRect();
        const leftOffset = document.documentElement.clientWidth < 1024 ? 140 : 53;
        setTop(cords?.top! + scrollY + 40);
        setLeft(cords?.left! + scrollX - leftOffset);
      }
      setIsVisible(!isVisible);
      return;
    }
  }

  if(!node) return null;

  return (
    <div className={`${props.className}`} ref={ref}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {
        isVisible && ReactDOM.createPortal(
          <div className={styles.list} style={{top, left}}
               onClick={() => setIsVisible(false)}>
            {children}
          </div>,
          node
        )
      }
    </div>
  )
}