import Image from "next/image";
import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <Image alt={"loader"} src="/loading.gif" width={200} height={180} />
    </div>
  );
};

export default Loader;
