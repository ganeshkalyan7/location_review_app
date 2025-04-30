import React, { useEffect, useState } from "react";
import pizzaData from "./PizzaData";
import "./Pizza.css";

function Pizza() {
  const [data, setData] = useState([
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
    },
  ]);

  const [newPizzaData, setNewPizzaData] = useState({
    name: "",
    ingredients: "",
  });

  const onchangeFunction = (e) => {
    setNewPizzaData({ ...newPizzaData, [e.target.name]: e.target.value });
  };

  console.log(newPizzaData);

  const functionToadd = () => {
    if (newPizzaData.name && newPizzaData.ingredients) {
      setData([...data, newPizzaData]);
      setNewPizzaData({ name: "", ingredients: "" });
    } else {
      alert("Please enter both name and ingredients");
    }
  };

  const functionToDelete = (pizzaName) => {
    setData(data.filter((pizza) => pizza.ingredients !== pizzaName));
  };

  const [filteredValue, setFilteredValue] = useState({
    name: "",
    ingredients: "",
  });

  //----------filter fuction onchange---------------------//
  const filterfunction = (e) => {
    setFilteredValue(
      pizzaData.filter((pizza) => pizza.name.includes(e.target.value))
    );
  };

  useEffect(() => {}, [filteredValue]);
  console.log(filteredValue);
  return (
    <div>
      <h2>Pizza Data</h2>
      <input
        type="text"
        placeholder="name"
        value={newPizzaData.name}
        onChange={onchangeFunction}
        name="name"
      />
      <input
        type="text"
        placeholder="Ingrediants"
        value={newPizzaData.ingredients}
        onChange={onchangeFunction}
        name="ingredients"
      />
      <button onClick={functionToadd}>Add new </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Ingrediants"
        value={filteredValue.name}
        onChange={filterfunction}
        name="name"
      />

      <div>
        {filteredValue.length > 0 ? (
          <>
            <p>{filteredValue.length}</p>
            {filteredValue.map((name) => (
              <ul className={`pizza ${name.soldOut ? "souldout" : ""}`}>
                <li>
                  {name.name}
                  <br />
                  {name.ingredients}
                  <br />
                  <img
                    src={name.photoName}
                    className={`pizza ${name.soldOut ? "souldout" : ""}`}
                  />
                  <br />
                  {name.soldOut ? "SOULD OUT" : name.price}

                  {/* <button onClick={() => functionToDelete(name.ingredients)}>
                Delete
              </button> */}
                </li>
              </ul>
            ))}
          </>
        ) : (
          <>
            {pizzaData.map((name) => (
              <ul className={`pizza ${name.soldOut ? "souldout" : ""}`}>
                <li>
                  {name.name}
                  <br />
                  {name.ingredients}
                  <br />
                  <img
                    src={name.photoName}
                    className={`pizza ${name.soldOut ? "souldout" : ""}`}
                  />
                  <br />
                  {name.soldOut ? "SOULD OUT" : name.price}

                  {/* <button onClick={() => functionToDelete(name.ingredients)}>
                Delete
              </button> */}
                </li>
              </ul>
            ))}
          </>
        )}
      </div>

      {/* <div>
        {pizzaData.map((name, index) => (
          <p key={index}>{name.name}</p>
        ))}
      </div> */}
    </div>
  );
}

export default Pizza;
