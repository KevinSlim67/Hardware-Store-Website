import React from "react";

function Button(props) {
  return (
    <button
      className={`bg-accent-400 hover:bg-accent-200 rounded-[30px] text-secondary ${props.className}`}
      onClick={props.function}
    >
      {props.text}
    </button>
  );
}

export default Button;
