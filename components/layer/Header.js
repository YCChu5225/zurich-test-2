import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";

const Header = () => {
  const isLoginUser = useSelector((state) => state.ui.isLoginUser);

  return (
    <div className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo_holder}>
          <Image alt="ZURICH" src="/zurich-logo.svg" width={200} height={50} />
        </div>
        {Object.keys(isLoginUser).length > 0 ? (
          <div className={styles.identity_wrapper}>
            <div>Hi, {isLoginUser.user.name}</div>
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
              Sign Out
            </button>
          </div>
        ) : (
          <div>Hi, Anonymous</div>
        )}
      </div>
    </div>
  );
};

export default Header;
