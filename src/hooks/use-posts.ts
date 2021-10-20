import {useEffect, useRef, useState} from "react";
import {getPosts} from "../actions/posts";
import {useAppDispatch} from "./use-dispatch";
import {useAppSelector} from "./use-selector";

export function usePosts()  {
  const token = useAppSelector(state => state.token);
  const {data, loading, error} = useAppSelector(state => state.posts);
  const dispatch = useAppDispatch();
  const bottomOfList = useRef<HTMLDivElement>(null);
  const wasCalled = useRef<boolean>(false);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {  
      if(entries[0].isIntersecting && !wasCalled.current && token && !isInfinityLoadDisabled()) {
        fetchPosts();
      }
    });

    if(bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if(bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
        wasCalled.current = false;
      }
    }
  }, [bottomOfList.current, data.after, token, requestCount]);

  const handleItemClick = (id: string) => {
    console.log(id);
  }

  const fetchPosts = () => {
    dispatch(getPosts({
      token,
      after: data.after,
    })).then(() => {
      setRequestCount(requestCount + 1);
    })
    wasCalled.current = true;
  }

  const isInfinityLoadDisabled = () => {
    return requestCount > 0 && requestCount % 3 === 0;
  }

  return {
    handleItemClick,
    loading,
    error,
    data,
    bottomOfList,
    isInfinityLoadDisabled: isInfinityLoadDisabled(),
    fetchPosts,
  }
}