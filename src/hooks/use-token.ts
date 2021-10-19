import {useEffect} from "react";
import {saveToken} from "../reducers/token";
import {useAppDispatch} from "./use-dispatch";

export function useToken() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(saveToken());
  }, [])
}