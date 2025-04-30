import React, { useState } from "react";
import Button from "./Button";

function SplitingBill({ onSelect, onBillSubmit }) {
  const [billValue, setBillValue] = useState("");
  const [billExpenses, setBillExpenses] = useState("");
  const [billPaidby, setBillPaidby] = useState("user");

  const billSplitPay = billValue ? billValue - billExpenses : "";
  console.log({ billValue, billExpenses, billPaidby });

  const billSubmit = (e) => {
    e.preventDefault();

    if (!billValue || !billExpenses) return;
    onBillSubmit(billPaidby === "user" ? billSplitPay : -billExpenses);
    console.log(billSplitPay);
  };
  return (
    <div className="splitBill">
      <h3>Split a bill with {onSelect.name}</h3>
      <br />
      <form onSubmit={billSubmit}>
        <label>💲 Bill Value</label>
        <input
          type="text"
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        />
        <br />
        <br />
        <label>🤷‍♀️ your Expense</label>
        <input
          type="text"
          value={billExpenses}
          onChange={(e) =>
            setBillExpenses(
              Number(e.target.value) > billValue
                ? billExpenses
                : Number(e.target.value)
            )
          }
        />
        <br />
        <br />
        <label>🧍‍♂️ {onSelect.name} Expense</label>
        <input type="text" disabled value={billSplitPay} />
        <br />
        <br />
        <label>👴 who`s paying the Bill</label>
        <select
          value={billPaidby}
          onChange={(e) => setBillPaidby(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{onSelect.name}</option>
        </select>
        <Button>Submit Bill</Button>
      </form>
    </div>
  );
}

export default SplitingBill;

// const [min, setMin] = useState(0);
// const [max, setMax] = useState(3000);
// const [value, setValue] = useState("");
//console.log(value);
//   <input
//   type="range"
//   name="range"
//   min={min}
//   max={max}
//   value={value}
//   onChange={(e) => setValue(e.target.value)}
// />
// <p>{value}</p>
