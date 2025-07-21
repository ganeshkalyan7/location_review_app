//import React from "react";
import Styles from "./Map.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";

function Map() {
  const [search, setsearch] = useSearchParams();
  const lat = search.get("lat");
  const lng = search.get("lng");
  const navigation = useNavigate();
  return (
    <div className={Styles.map} onClick={() => navigation("form")}>
      <h1>Map</h1>
      <h1>
        {lat} && {lng}
      </h1>
    </div>
  );
}

export default Map;
