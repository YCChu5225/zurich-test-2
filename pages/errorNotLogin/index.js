import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import styles from "./errorNotLogin.module.css";

const ErrorNotLogin = () => {
  const router = useRouter();
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <p>Sorry, you are attempting to access a secured page.</p>
        <p>Please login before proceed</p>

        <button
          onClick={() => {
            router.push("/");
          }}>
          Login
        </button>
      </div>
    </section>
  );
};

export default ErrorNotLogin;
