import React from "react";
import styles from "./Card.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function Card({ children }: IProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

Card.Grid2 = function ({ children }: IProps) {
  return <div className={styles.grid2}>{children}</div>;
};

Card.Content = function ({ children }: IProps) {
  return <div className={styles.content}>{children}</div>;
};

Card.Footer = function ({ children }: IProps) {
  return <div className={styles.footer}>{children}</div>;
};
