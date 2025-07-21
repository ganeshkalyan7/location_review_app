//import React from "react";
import CityItem from "./CityItem";
import styles from "./CitiesList.module.css";
import Spinner from "./Spinner";
function CitiesList({ citiesdata, isloading, deleteItem }) {
  console.log(citiesdata);
  if (isloading) return <Spinner />;
  if (!citiesdata.length)
    return <h1>No Contries or state you visited yet?🤔</h1>;
  return (
    <div>
      {citiesdata.map((city) => (
        <CityItem city={city} key={city.id} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default CitiesList;
