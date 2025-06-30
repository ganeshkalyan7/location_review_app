import { useReducer, useState } from "react";

function CounterUsingReducer() {
  const initialState = { count: 0, step: 1 };
  function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dce":
        return { ...state, count: state.count - state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };
      case "reset":
        return { count: 0, step: 0 };
      default:
        throw new Error("unkonw action");
    }
  }

  const [state, counterfunction] = useReducer(reducer, initialState);
  const { count, step } = state;

  const DecrementFun = () => {
    counterfunction({ type: "dce" });
    //dispatch(-1);
  };

  const onChangeEvent = (e) => {
    counterfunction({ type: "setCount", payload: Number(e.target.value) });
  };
  const IncrementFun = () => {
    counterfunction({ type: "inc" });
    //dispatch(1);
  };

  const resetFun = () => {
    counterfunction({ type: "reset" });
  };

  const stepfunction = (e) => {
    counterfunction({ type: "setStep", payload: Number(e.target.value) });
  };
  return (
    <div>
      <div>
        <h1>conter using reducers</h1>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={stepfunction}
          />
          {/* <p>{step}</p> */}
          <button onClick={DecrementFun}>-</button>
          <input type="text" value={count} onChange={onChangeEvent} />
          <button onClick={IncrementFun}>+</button>
        </div>
        <button onClick={resetFun}>Reset</button>
      </div>
    </div>
  );
}

export default CounterUsingReducer;
