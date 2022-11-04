import React from "react";
import styles from "./Footer.module.css";
import moment from "moment";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_left}>
          <ul>
            <li>Contact Us</li>
            <li>Personal Data Protection Act</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className={styles.footer_right}>
          Copyright ⓒ TestApp Malaysia {moment().format("YYYY")}
        </div>
      </div>
    </div>
  );
};

export default Footer;
