import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import CounterUsingReducer from "./CounterUsingReducer";
import QuizMain from "./QuizApp/QuizMain";
import UseReducerBankaccountTask from "./QuizApp/UseReducerBankaccountTask";

function App() {
  return (
    <>
      <div>
        {/* <CounterUsingReducer /> */}
        {/* <QuizMain /> */}
        <UseReducerBankaccountTask />
      </div>
    </>
  );
}
// <TodoList />

export default App;
