import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

export default function CityItem({ city, deleteItem }) {
  const { cityName, date, emoji, id, position } = city;

  const formateDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  console.log(formateDate(date));

  return (
    <div>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityitem}
      >
        <p className={styles.cityName}>{cityName}</p>
        <p className={styles.emoji}>{emoji}</p>
        <p className={styles.date}>({formateDate(date)})</p>
        <button className={styles.button} onClick={() => deleteItem(id)}>
          &times;
        </button>
      </Link>
    </div>
  );
}
