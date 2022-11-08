import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
      dispatch(uiActions.isLoginHandler(session));
    }
  }, [status]);

  return (
    <div className={styles.container}>
      <h1>Welcome to Zurich Test APP</h1>

      <button
        onClick={() => {
          signIn("google");
        }}>
        Login
      </button>
    </div>
  );
};

export default Login;
