import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {UserData} from "../context/user-context/context";
import {useAppSelector} from "./use-selector";

export function useUserData() {
  const token = useAppSelector(state => state.token);
  const [data, setData] = useState<UserData>({});
  useEffect(() => {
    if(token) {
      axios.get<UserData>("https://oauth.reddit.com/api/v1/me", {
        headers: {
          Authorization: `bearer ${token}`
        }
      }).then((res: AxiosResponse<UserData>) => {
        setData({
          name: res.data.name,
          icon_img: res.data.icon_img
        });
      }).catch(console.log)
    }
  }, [token]);

  return {
    data
  }
}