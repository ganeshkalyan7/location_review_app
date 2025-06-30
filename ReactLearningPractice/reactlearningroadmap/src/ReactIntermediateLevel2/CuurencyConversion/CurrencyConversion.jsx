import React, { useEffect, useState } from "react";

function CurrencyConversion() {
  const [FromCurrency, setFromCurrency] = useState("INR");
  const [Tocurrency, setToCurrency] = useState("USD");
  const [InputValue, setInputValue] = useState(1);
  const [result, setresult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log(FromCurrency, Tocurrency);

  const currencyChange = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${InputValue}&from=${FromCurrency}&to=${Tocurrency}`
      );
      const data = await response.json();
      console.log(data);
      setresult(data.rates[Tocurrency]);
      setIsLoading(false);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // if (response.message === "bad currency pair") {
      //   setresult(1);
      //   console.log("wdewd");
      // }

      // if (FromCurrency === Tocurrency) return setresult(1);
    } catch (err) {
      console.log(err);
      setresult(InputValue);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(result);
  console.log(isLoading);
  useEffect(() => {
    currencyChange();
  }, [InputValue, FromCurrency, Tocurrency]);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={InputValue}
          // disabled={isLoading}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          value={FromCurrency}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          value={Tocurrency}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        {/* <p>{FromCurrency}</p>
        <p>{Tocurrency}</p>
        <p>{InputValue}</p> */}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>
            {result} {Tocurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConversion;
