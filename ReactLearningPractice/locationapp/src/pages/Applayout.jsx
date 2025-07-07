//import React from "react";
import styles from "./Applayout.module.css";
import { NavLink } from "react-router-dom";

function Applayout() {
  return (
    <div className={styles.applayout}>
      <div className={styles.locations}>
        <NavLink to="/Login/cities">city</NavLink>
        <NavLink to="/contries">country</NavLink>
      </div>
      <div>
        <h1>map</h1>
      </div>
    </div>
  );
}

export default Applayout;
