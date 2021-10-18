import {useEffect} from "react";
import {setToken} from "../reducers/token";
import {useAppDispatch} from "./use-dispatch";

export function useToken() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, [])
}