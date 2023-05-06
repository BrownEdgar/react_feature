import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_USERS } from "../redux/features/actionTypes";
import axios from "axios";

export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=2")
      .then((response) =>
        dispatch({
          type: GET_USERS,
          payload: {
            users: response.data,
          },
        })
      );
  }, []);

  return (
    <div>
      <h1>USERS</h1>
      <pre>{JSON.stringify(users, null, 1)}</pre>
    </div>
  );
}
