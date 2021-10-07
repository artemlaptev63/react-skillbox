import React, {ReactNode, useEffect, useState} from "react";
import {noop} from "../../utils/noop";
import styles from "./dropdown.css";

type DropdownProps = {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown(props: DropdownProps) {
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
    setIsVisible(isOpen)
  }, [isOpen])

  useEffect(() => {
    isVisible ? onOpen() : onClose();
  }, [isVisible])

  const handleOpen = () => {
    if(isOpen === undefined) {
      setIsVisible(!isVisible);
      return;
    }
  }

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {
        isVisible && (
          <div className={styles.listContainer}>
            <div className={styles.list} 
                 onClick={() => setIsVisible(false)}>
              {children}
            </div>
          </div>
        )
      }
      
    </div>
  )
}