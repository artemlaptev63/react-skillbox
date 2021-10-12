import React, {FormEvent, MouseEvent, useEffect, useRef, useState} from "react";
import styles from "./form.css";

type CommentFormProps = {
  isVisible: boolean;
  author: string;
  hide(): void;
  reply(commentValue: string): void;
}

export function ControlledCommentForm(props: CommentFormProps) {
  const [commentValue, setCommentValue] = useState<string>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const hide = (e: MouseEvent) => {
    e.stopPropagation();
    props.hide();
  }

  const reply = (e: MouseEvent) => {
    e.stopPropagation();
    props.reply(commentValue);
  }

  useEffect(() => {
    if(props.isVisible) {
      setCommentValue(`${props.author}, `);
      ref.current?.focus();
    } else {
      setCommentValue("");
    }
  }, [props.isVisible]);

  return (
    <>
      {
        props.isVisible ? (
          <>
            <textarea value={commentValue}
                      ref={ref}
                      onChange={e => setCommentValue(e.target.value)}
                      className={styles.input}/>
            <div className={styles.textareaControls}>
              <button onClick={hide} className={styles.close}>Закрыть</button>
              <button onClick={reply} className={styles.reply}>Ответить</button>
            </div>
          </>
        ) : null
      }
    
    </>
  )
}

export function UncontrolledCommentForm(props: CommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const hide = (e: MouseEvent) => {
    e.stopPropagation();
    ref.current!.value = ""
    props.hide();
  }

  const reply = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if(ref.current?.value) {
      props.reply(ref.current?.value);
    }
  }

  useEffect(() => {
    if(props.isVisible) {
      if (ref.current) ref.current.value = props.author + ", ";
      ref.current?.focus();
    }
  }, [props.isVisible]);

  return (
    <>
      {
        props.isVisible ? (
          <form onSubmit={reply}>
            <textarea ref={ref}
                      className={styles.input}/>
            <div className={styles.textareaControls}>
              <button onClick={hide} className={styles.close}>Закрыть</button>
              <button type="submit" onClick={reply} className={styles.reply}>Ответить</button>
            </div>
          </form>
        ) : null
      }
    
    </>
  )
}
