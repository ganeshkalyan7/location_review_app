import React, { useState } from "react";

function StateCounter() {
  const [counter, setCounter] = useState(1);
  const [steps, setSteps] = useState(0);
  let date = new Date();
  date.setDate(date.getDate() + steps);
  let filteredDate = date.toLocaleDateString();
  console.log(filteredDate);
  return (
    <div>
      <botton
        onClick={() => setCounter(counter - 1)}
        style={{
          backgroundColor: "gray",
          padding: "5px",
          borderRadius: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        -
      </botton>
      {counter}
      <botton
        onClick={() => setCounter(counter + 1)}
        style={{
          backgroundColor: "gray",
          padding: "5px",
          borderRadius: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        +
      </botton>

      <br />
      <br />

      <botton
        onClick={() => setSteps(steps - counter)}
        style={{
          backgroundColor: "gray",
          padding: "5px",
          borderRadius: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        -
      </botton>
      {steps}
      <botton
        onClick={() => setSteps(steps + counter)}
        style={{
          backgroundColor: "gray",
          padding: "5px",
          borderRadius: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        +
      </botton>

      <br />
      <br />
      {steps === 0 ? (
        <p>Today the date is {filteredDate}</p>
      ) : steps < 0 ? (
        <p>
          {steps} day ago was {filteredDate}
        </p>
      ) : (
        <p>
          {steps} from today is {filteredDate}
        </p>
      )}
    </div>
  );
}

export default StateCounter;
