import React from "react";
import styles from "./description.css";

type DescriptionProps = {

}

export function Description(props: DescriptionProps) {
  return (
    <a href="#post-url" className={styles.link}>
      <span className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident ipsam reiciendis placeat nostrum perferendis quod, adipisci nobis saepe. Qui doloribus aspernatur laudantium in eligendi, asperiores voluptatibus maxime amet iste.
      </span>
    </a>
  )
}