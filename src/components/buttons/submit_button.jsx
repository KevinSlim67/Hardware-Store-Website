import React from "react";


function SubmitButton(props) {
  return (
    <button
      className={`bg-accent-400 hover:bg-accent-200 active:bg-accent-200 rounded-[30px] text-secondary ${props.className}`}
      onClick={props.function}
      type="submit"
    >
      {props.text}
    </button>
  );
}

export default SubmitButton;
