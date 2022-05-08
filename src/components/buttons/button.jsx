import React from "react";

const notImplemented = () => {
  console.log('hi');
  return true;
};

function Button(props) {
  return (
    <button
      className={`bg-accent-400 hover:bg-accent-200 active:bg-accent-200 rounded-[30px] text-secondary ${props.className}`}
      onClick={notImplemented}
      on
    >
      {props.text}
    </button>
  );
}

export default Button;
