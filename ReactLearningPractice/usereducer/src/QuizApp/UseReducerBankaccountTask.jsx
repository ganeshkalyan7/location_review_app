import React, { useReducer } from "react";

const initialstate = {
  balance: 0,
  loan: 0,
  account: "inactive",
};

function reducer(state, acction) {
  switch (acction.type) {
    case "active":
      return { ...state, account: "active", balance: 500 };
    case "desposite":
      return { ...state, account: "active", balance: state.balance + 150 };
    case "withdraw":
      return { ...state, account: "active", balance: state.balance - 50 };
    case "loanrequest":
      return {
        ...state,
        account: "active",
        balance: state.balance + 5000,
        loan: 5000,
      };
    case "payloan":
      return {
        ...state,
        account: "active",
        balance: state.balance - 5000,
        loan: 0,
      };
    case "cloaseaccount":
      return initialstate;
    default:
      throw new Error("action unkown");
  }
}

function UseReducerBankaccountTask() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const { balance, loan, account } = state;
  console.log(balance, loan, account);
  return (
    <div>
      <h1>useReducer Bank Account</h1>
      <p>Balance:{balance}</p>
      <p>loan:{loan}</p>
      <button
        onClick={() => dispatch({ type: "active" })}
        disabled={account === "active"}
      >
        Open account
      </button>
      <br />
      <br />
      <button
        disabled={account !== "active"}
        onClick={() => dispatch({ type: "desposite" })}
      >
        Deposite 150
      </button>
      <br />
      <br />
      <button
        disabled={account !== "active"}
        onClick={() => dispatch({ type: "withdraw" })}
      >
        Withdraw 50
      </button>
      <br />
      <br />
      <button
        disabled={account !== "active"}
        onClick={() => dispatch({ type: "loanrequest" })}
      >
        Request forLoan 5000
      </button>
      <br />
      <br />
      <button
        disabled={account !== "active"}
        onClick={() => dispatch({ type: "payloan" })}
      >
        Pay Loan
      </button>
      <br />
      <br />
      <button
        disabled={account !== "active"}
        onClick={() => dispatch({ type: "cloaseaccount" })}
      >
        Close account
      </button>
    </div>
  );
}

export default UseReducerBankaccountTask;
