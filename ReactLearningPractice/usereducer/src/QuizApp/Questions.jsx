import React, { useState } from "react";

function Questions({ questions, dispatch, answer, currentIndex, questionlen }) {
  return (
    <div>
      <h1>{questions?.question}</h1>
      {questions.options.map((option, index) => (
        <div key={option.id}>
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            style={{
              backgroundColor: `${
                answer
                  ? index === questions.correctOption
                    ? "blue"
                    : "red"
                  : ""
              }`,
            }}
          >
            {option}
          </button>
        </div>
      ))}
      {currentIndex < questionlen - 1
        ? answer && (
            <button onClick={() => dispatch({ type: "nextQuation" })}>
              Next
            </button>
          )
        : currentIndex === questionlen - 1
        ? answer && (
            <button onClick={() => dispatch({ type: "finished" })}>
              Finish
            </button>
          )
        : ""}
    </div>
  );
}

export default Questions;
