import React from "react";
import styles from "./form.css";
import {Formik, FormikHelpers, FormikProps} from "formik";

type PostCommentFormProps = {
  handleSubmit(values: PostCommentFormValues): void;
}

const initialValues = {
  comment: "",
}

export type PostCommentFormValues = {
  comment: string;
}

export function PostCommentForm(props: PostCommentFormProps) {
  const onSubmit = (values: PostCommentFormValues, helpers: FormikHelpers<PostCommentFormValues>) => {
    props.handleSubmit(values);
    helpers.setSubmitting(false);
  }

  const isInvalid = (props: FormikProps<PostCommentFormValues>) => {
    return !!props.errors.comment && props.touched.comment;
  }

  return (
    <Formik initialValues={initialValues} 
            onSubmit={onSubmit}
            validate={validateComment}>
      {
        (props: FormikProps<PostCommentFormValues>) => (
          <form onSubmit={props.handleSubmit} className={styles.form}>
            <textarea name="comment"
                      aria-invalid={isInvalid(props)}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.comment}
                      className={styles.textarea}/>
            <div className={styles.error}>
              {props.errors.comment && props.touched.comment && props.errors.comment}
            </div>
            <button type="submit" 
                    disabled={!props.isValid || props.isSubmitting} 
                    className={styles.button}>
              Комментировать
            </button>
          </form>
        )
      }
    </Formik>
    
  )
}

type PostCommentFormErrors = {
  comment?: string;
}

const validateComment = (values: PostCommentFormValues) => {
  const errors: PostCommentFormErrors = {};
  if (!values.comment) {
    errors.comment = 'Обязательное поле';
  } else if (values.comment.length < 3) {
    errors.comment = 'Недостаточно символов';
  }
  return errors;
}