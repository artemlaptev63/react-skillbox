import {useEffect} from "react";
import {getUserData} from "../actions/user-data";
import {useAppDispatch} from "./use-dispatch";
import {useAppSelector} from "./use-selector";

export function useUserData() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(state => state.token);
  useEffect(() => {
    if(token) {
      dispatch(getUserData(token));
    }
  }, [token]);
}