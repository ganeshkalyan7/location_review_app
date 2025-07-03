//import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <Link to="/dw">price</Link>
        </li>
        <li>
          <Link to="/">product</Link>
        </li>
        <li>
          <Link to="/">login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
