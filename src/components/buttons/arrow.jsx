import React from "react";

function Arrow(props) {
  let image = "assets/images/icons/arrow_left.png";
  let rotation;

  if (props.direction === "right") rotation = "rotate-180";

  return (
    <button
      onClick={props.onClick}
      className={`object-contain ${props.className} ${rotation} hover:bg-slate-300 hover:bg-opacity-20 rounded-full`}
    >
      <img src={image} alt="arrow" />
    </button>
  );
}

export default Arrow;
