import React, { memo } from "react";
import Loader from "../../components/loader/Loader";
import styles from "./Homepage.module.css";
import { getSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import useFetchUsers from "../../hooks/useFetchUsers";
import useFilter from "../../hooks/useFilter";

const Homepage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.ui.isLoading);
  const userLists = useSelector((state) => state.ui.userLists);
  const selectedName = useSelector((state) => state.ui.selectedName);

  useFetchUsers();

  return (
    <>
      <section>
        <div className={styles.list_container}>
          <div className={styles.list_header}>
            <div>Avatar</div>
            <div>
              <button
                className={selectedName === "first" ? styles.active : ""}
                onClick={() => dispatch(uiActions.filterByName("first"))}>
                First Name
              </button>
            </div>
            <div>
              <button
                className={selectedName === "last" ? styles.active : ""}
                onClick={() => dispatch(uiActions.filterByName("last"))}>
                Last Name
              </button>
            </div>
            <div>Email</div>
          </div>
          <div className={styles.list_body}>
            {isLoading ? (
              <Loader />
            ) : (
              <ul>
                {useFilter(selectedName, userLists)?.map((d) => {
                  return (
                    <li key={d.last_name}>
                      <div>
                        <img src={d.avatar} alt="Profile Pic" />
                      </div>
                      <div>{d.first_name}</div>
                      <div>{d.last_name}</div>
                      <div>{d.email}</div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Homepage);

// Example 2 by serverside rendering
export const getServerSideProps = async (cx) => {
  const sess = await getSession(cx);

  if (!sess) {
    return {
      redirect: {
        destination: "/errorNotLogin",
      },
    };
  }
  return { props: { sess } };
};
