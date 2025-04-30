import React, { useState } from "react";
import Button from "./Button";

function Addfriend({ addNewFriend, closForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const addfriends = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID;
    const imageGenerate = `${image}?=${id}`;

    if (!name || !image) return;

    const newfriend = { id, name, image: imageGenerate, balance: 0 };
    addNewFriend(newfriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
    closForm(false);
  };
  console.log(name);
  return (
    <div className="addnewfriend">
      <form onSubmit={addfriends}>
        <label>name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Image URL : </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default Addfriend;
