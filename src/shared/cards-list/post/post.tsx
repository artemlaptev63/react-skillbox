import React from "react";
import {Modal} from "../../../common/modal/modal";
import {usePostComments} from "../../../hooks/use-post-comments";
import {CommentsList} from "../comments-list/comments-list";
import {PostCommentForm} from "./form/form";
import styles from "./post.css";

type PostProps = {
  onClose?(): void;
  postId: string;
}

export function Post(props: PostProps) {
  const {comments} = usePostComments(props.postId);
  console.log(comments);
  return (
    <Modal onClose={props.onClose}>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem enim impedit magni</h2>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis autem, dolores fugit quaerat saepe eaque eius fuga at explicabo, vitae cupiditate repudiandae facere natus amet debitis, totam laboriosam ducimus. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus vel ad, illo a inventore adipisci eos ratione atque asperiores cupiditate quis neque enim error, odio accusantium impedit corrupti maiores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam et facilis, iure sit nulla sunt nihil, beatae sapiente architecto quisquam. Necessitatibus et repellendus dolore illum voluptatibus quos nobis excepturi.</p>
      </div>
      <PostCommentForm />
      <CommentsList comments={comments} />
    </Modal>
  )
}