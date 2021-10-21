import React from "react";
import {useParams} from "react-router";
import {Modal} from "../../../common/modal/modal";
import {usePost} from "../../../hooks/use-post-comments";
import {CommentsList} from "../comments-list/comments-list";
import {CommentFormContainer} from "./form-container/form-container";
import styles from "./post.css";

export function Post() {
  const params = useParams<{id: string}>();
  const {comments} = usePost(params.id);
  
  return (
    <Modal>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem enim impedit magni</h2>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis autem, dolores fugit quaerat saepe eaque eius fuga at explicabo, vitae cupiditate repudiandae facere natus amet debitis, totam laboriosam ducimus. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus vel ad, illo a inventore adipisci eos ratione atque asperiores cupiditate quis neque enim error, odio accusantium impedit corrupti maiores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam et facilis, iure sit nulla sunt nihil, beatae sapiente architecto quisquam. Necessitatibus et repellendus dolore illum voluptatibus quos nobis excepturi.</p>
      </div>
      <CommentFormContainer/>
      <CommentsList comments={comments} />
    </Modal>
  )
}