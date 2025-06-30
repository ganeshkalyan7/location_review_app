import React from "react";

function QuizEnd({ points, totalPoints, dispatch }) {
  return (
    <div>
      <h1>END of Quiz</h1>
      <p>
        you have scored {points}/{totalPoints}
      </p>

      <button onClick={() => dispatch({ type: "restart" })}>
        Re-start quiz
      </button>
    </div>
  );
}

export default QuizEnd;
