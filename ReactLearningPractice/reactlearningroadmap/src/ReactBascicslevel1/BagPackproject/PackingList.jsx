import React from "react";
import "./Bagpack.css";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleChange,
  ClearItems,
}) {
  return (
    <div>
      <div className="itemlist" style={{ color: "#fff" }}>
        {items.map((items) => (
          <div key={items.id}>
            <ul className="ListItems">
              <li>
                <input
                  type="checkbox"
                  value={items.packed}
                  onChange={() => onToggleChange(items.id)}
                />
                <span
                  style={items.packed ? { textDecoration: "Line-through" } : {}}
                >
                  {items.quantity} {items.description}
                </span>
                <button onClick={() => onDeleteItems(items.id)}>❌</button>
              </li>
            </ul>
          </div>
        ))}

        <button onClick={ClearItems}>clear Items</button>
      </div>
    </div>
  );
}
