import React, { useState } from "react";
const mainContainer = {
  display: "flex",
  gap: "3rem",
  alignItems: "center",
};

const startStyling = {
  display: "flex",
};

const starSvg = {
  height: "5rem",
  width: "5rem",
  cursor: "pointer",
};

function Star({ star, onSetRating }) {
  console.log(star);
  const starRatingLength = star;
  const [rating, setRating] = useState(0);
  const [tempRating, setTemprating] = useState(0);
  const [readMore, setReadMore] = useState(false);
  console.log(rating);

  const ratingFuntion = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };
  return (
    <div>
      <div style={mainContainer}>
        <div style={startStyling}>
          {Array.from({ length: starRatingLength }, (_, i) => (
            <StarSvg
              key={i}
              onRatingEvent={() => ratingFuntion(i + 1)}
              fullStar={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              ratingHover={() => setTemprating(i + 1)}
              retingLeav={() => setTemprating(0)}
            />
          ))}
        </div>
        <div>{tempRating || rating || ""}</div>
      </div>
      <br />
      <div>
        <div style={{ width: "600px" }}>
          {" "}
          xTerra Robotics Pvt Ltd
          {readMore &&
            "We aim to become global leader in autonomous robotics. We develop rugged, autonomous quadruped robots with advanced AI, that go beyond conventional limitations, offering robust, dynamic, and adaptable solutions for a variety of applications."}
          <div onClick={() => setReadMore(!readMore)}>
            <span
              style={{
                fontSize: "15px",
                color: "blue",
                cursor: "pointer",
                borderBottom: "1px solid blue",
                margin: "10px",
              }}
            >
              {readMore ? "...  hide details" : "... Show More"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;

function StarSvg({ onRatingEvent, fullStar, ratingHover, retingLeav }) {
  console.log(ratingHover);
  return (
    <>
      <span
        style={starSvg}
        onClick={onRatingEvent}
        onMouseEnter={ratingHover}
        onMouseLeave={retingLeav}
      >
        {fullStar ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000"
              stroke="#000"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        ) : (
          <div style={starSvg} onClick={onRatingEvent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 20 20"
              stroke="#000"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}
      </span>
    </>
  );
}
