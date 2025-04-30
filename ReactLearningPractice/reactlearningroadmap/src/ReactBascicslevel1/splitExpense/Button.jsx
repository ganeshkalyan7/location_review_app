import React from "react";

function Button({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} className="clickbuttons">
        {children}
      </button>
    </div>
  );
}

export default Button;
