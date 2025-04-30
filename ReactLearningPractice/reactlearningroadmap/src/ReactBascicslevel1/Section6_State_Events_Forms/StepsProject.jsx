import React, { useState } from "react";
import "./StepsProject.css";

function StepsProject() {
  const message = [
    "login to the form ",
    "upload your Resume",
    "give us Brief Description about you",
  ];

  const [steps, setSteps] = useState(1);
  const [isComponentOpen, setIsComponentOpen] = useState(true);

  const buttonPrevious = () => {
    if (steps > 0) {
      setSteps(steps - 1);
    }
  };

  const buttonNext = () => {
    if (steps < 3) {
      setSteps(steps + 1);
    }
  };
  //----------------------- state mechanisam of state in react -----------------//

  console.log(steps);
  return (
    <>
      <button onClick={() => setIsComponentOpen(!isComponentOpen)}>
        &times;
      </button>
      {isComponentOpen && (
        <div>
          <div>
            <h1>React State Lecture Project</h1>
            <div className="stepsContainer">
              <div className="steps">
                <div className={`step ${steps === 1 ? "active" : ""}`}>1</div>
                <div className={`step ${steps === 2 ? "active" : ""}`}>2</div>
                <div className={`step ${steps === 3 ? "active" : ""}`}>3</div>
              </div>
              <div>
                steps:-{steps}
                {message[steps - 1]}
              </div>
              <div className="buttons">
                <button className="button previous" onClick={buttonPrevious}>
                  Previous
                </button>
                <button className="button Next" onClick={buttonNext}>
                  next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StepsProject;
