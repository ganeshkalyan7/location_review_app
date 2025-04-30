// import { useState } from "react";
import React, { useState } from "react";
import Form from "./Form";
import LogoForm from "./LogoForm";
import PackingList from "./PackingList";
import Stats from "./Stats";

function BagPackDashboard() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    // setItems([...items, item]);
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    // setItems(items.filter((itemid) => itemid.id !== id));
    setItems((items) => items.filter((itemid) => itemid.id !== id));
  };

  const hadleToggleState = (itemid) => {
    setItems((items) =>
      items.map((itemID) =>
        itemID.id === itemid ? { ...itemID, packed: !itemID.packed } : itemID
      )
    );
  };

  const onClearItems = () => {
    setItems([]);
  };
  console.log(items);
  // const initialItems = [
  //   { id: 1, description: "passport", quantity: 2, packed: true },
  //   { id: 2, description: "documents", quantity: 1, packed: false },
  //   { id: 3, description: "laguagebag", quantity: 3, packed: false },
  // ];
  return (
    <div>
      <LogoForm />
      <Form handleAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItems={deleteItem}
        onToggleChange={hadleToggleState}
        ClearItems={onClearItems}
      />
      <Stats item={items} />
    </div>
  );
}

export default BagPackDashboard;
