import React from "react";

function Progress({ index, questionlen, points, totalPoints }) {
  return (
    <div>
      <h1>
        <progress id="file" max={questionlen} value={index + 1}>
          70%
        </progress>
        {index + 1}/{questionlen}
      </h1>
      <p>
        {points}/{totalPoints}
      </p>
    </div>
  );
}

export default Progress;
