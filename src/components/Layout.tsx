import React from "react";
import styles from "./Layout.module.scss";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}></div>

      <div className={styles.content}>
        <div className={styles.topbar}>
          <Topbar />
        </div>
        <div className={styles.container}></div>
      </div>
      <div className={styles.infobar}></div>
    </div>
  );
}
