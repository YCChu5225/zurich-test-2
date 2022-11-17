import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

const useFetchUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("api/users");
      const json = await data.json();

      dispatch(uiActions.userListHandler(json));
    };

    dispatch(uiActions.loadingHandler());
    fetchData().catch(console.error);
    setTimeout(() => {
      dispatch(uiActions.loadingHandler());
    }, 200);
  }, []);
};

export default useFetchUsers;
