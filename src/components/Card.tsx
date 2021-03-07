import React from "react";
import styles from "./Card.module.scss";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function Card({ children, style, className }: IProps) {
  return (
    <div
      style={style}
      className={`${styles.wrapper} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

Card.Grid2 = function ({ children, style, className }: IProps) {
  return (
    <div
      style={style}
      className={`${styles.grid2} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

Card.SpaceBetween = {
  Vertical: function ({ children, style, className }: IProps) {
    return (
      <div
        style={style}
        className={`${styles.verticalSpaceBetween} ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    );
  },
  Horizonal: function ({ children, style, className }: IProps) {
    return (
      <div
        style={style}
        className={`${styles.horizontalSpaceBetween} ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    );
  },
};

Card.Title = function ({ children, style, className }: IProps) {
  return (
    <div
      style={style}
      className={`${styles.title} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

Card.SubTitle = function ({ children, style, className }: IProps) {
  return (
    <div
      style={style}
      className={`${styles.subTitle} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

Card.Content = function ({ children, style, className }: IProps) {
  return (
    <div
      style={style}
      className={`${styles.content} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

Card.Footer = function ({ children, style, className }: IProps) {
  return (
    <div
      style={style}
      className={`${styles.footer} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};
