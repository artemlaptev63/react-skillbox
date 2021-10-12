import React, {useState} from "react";
import {CommentContextProvider} from "../../../../../context/comment-context/provider";
import {Post} from "../../../post/post";
import styles from "./description.css";

type DescriptionProps = {
  description: string;
  postUrl: string;
  postId: string;
}

export function Description(props: DescriptionProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <a className={styles.link} onClick={() => setIsModalOpened(true)}>
        <span className={styles.description}>
          {props.description}
        </span>
      </a>
      <CommentContextProvider>
        {
          isModalOpened ? (
            <Post postId={props.postId} onClose={() => setIsModalOpened(false)}/>
          ) : null
        } 
      </CommentContextProvider>
    </>
  )
}