import React from "react";
import "./Quiz.css";

function StartScreen({ questionlen, letsStart, dispatch }) {
  return (
    <div className="container">
      <div>
        <h2>Welcome to the React Quiz!</h2>
        <h4>{questionlen} questions to test your React mastery</h4>
        <button onClick={() => dispatch({ type: "startQuiz" })}>
          Let`s start ?
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
