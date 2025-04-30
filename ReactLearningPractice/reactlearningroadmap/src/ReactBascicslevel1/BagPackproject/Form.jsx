import React, { useState } from "react";
import "./Bagpack.css";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //console.log(items);
  const handleEvents = (e) => {
    e.preventDefault();
    if (!description) return alert("pls add description");
    let newItem = { description, quantity, packed: false, id: Date.now() };
    handleAddItems(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  };

  console.log(handleAddItems);
  return (
    <div>
      <div className="form">
        <form onSubmit={handleEvents}>
          <h1>What Do You Need for your 😘 Trip ?</h1>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {" "}
                {num}{" "}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="text..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}
