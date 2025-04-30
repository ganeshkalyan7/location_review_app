import React from "react";
import "./Bagpack.css";

export default function Stats({ item }) {
  const listItems = item.length;
  const packed = item.filter((item) => item.packed).length;
  const percentage = Math.round((packed / listItems) * 100);
  console.info(packed);
  return (
    <div className="statscontainer">
      <div className="stats">
        <p>
          you Have {listItems} items on your List, and you already packed{" "}
          {packed} and covred {percentage}% and ready for trip
        </p>
      </div>
    </div>
  );
}
