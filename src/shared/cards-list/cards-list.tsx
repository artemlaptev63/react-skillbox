import React from "react";
import {Route} from "react-router";
import {Loader} from "../../common/loader/loader";
import {usePosts} from "../../hooks/use-posts";
import {merge} from "../../utils/merge";
import {Card} from "./card/card";
import styles from "./cards-list.css";
import {Post} from "./post/post";

export function CardsList() {
  const {loading, error, data, handleItemClick, bottomOfList, isInfinityLoadDisabled, fetchPosts} = usePosts();

  return (
    <ul className={styles.list}>
      {!loading && !error && !data.children.length && <div>Нет публикаций</div>}
      {error && <div>{error}</div>}
      {
        data.children.map(merge({onClick: handleItemClick})).map(item => {
          return <Card post={item.data} key={item.data.id}/>
        })
      }
      {loading && <Loader/>}
      {
        isInfinityLoadDisabled && !loading && (
          <div className={styles.loadMore} onClick={fetchPosts}>Загрузить еще</div>
        )
      }
      <Route exact path="/posts/:id">
        <Post/>
      </Route>
      <div ref={bottomOfList}/>
    </ul>
  )
}