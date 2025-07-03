import React from "react";
import styles from "./logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src="icon.png" />
      <p>WorldWise</p>
    </Link>
  );
}

export default Logo;
