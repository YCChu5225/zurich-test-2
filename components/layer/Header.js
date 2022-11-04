import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_holder}>
        <Image alt="ZURICH" src="/zurich-logo.svg" width={200} height={50} />
      </div>
    </div>
  );
};

export default Header;
