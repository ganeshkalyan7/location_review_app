import React, { useState } from "react";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tipPercentage = (billAmount * ((percentage1 + percentage2) / 2)) / 100;
  console.log(percentage1);
  console.log(percentage2);

  const ResetFunction = () => {
    setBillAmount("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div>
      <ValueInput billAmount={billAmount} setBillAmount={setBillAmount} />
      <SelectPercentage
        percentage={percentage1}
        onchangepercentage={setPercentage1}
      >
        How do you Like Our Service
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onchangepercentage={setPercentage2}
      >
        How do you`r Frind Like Our Service
      </SelectPercentage>
      <TipOutput billAmount={billAmount} tipPercentage={tipPercentage} />
      <ResetButton resetbutton={ResetFunction} />
    </div>
  );
}

export default TipCalculator;

function ValueInput({ billAmount, setBillAmount }) {
  return (
    <div>
      <label>How Much Was the Bill?</label>
      <input
        type="text"
        placeholder="enter bill amout"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, percentage, onchangepercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onchangepercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It Was ok (5%)</option>
        <option value="10">It Was Good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
function TipOutput({ billAmount, tipPercentage }) {
  return (
    <div>
      <p>
        You Have to pay rs{billAmount + tipPercentage} (rs{billAmount}+ rs{" "}
        {tipPercentage} Tip)
      </p>
    </div>
  );
}
function ResetButton({ resetbutton }) {
  return (
    <div>
      <button onClick={resetbutton}>Reset</button>
    </div>
  );
}
