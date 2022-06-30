import React from "react";

function Arrow(props) {
  let image = "assets/images/icons/arrow_left.png";
  let rotation;

  if (props.direction === "right") rotation = "rotate-180";

  return (
    <div
      onClick={props.onClick}
      className={`object-contain ${props.className} ${rotation} hover:bg-slate-300 hover:bg-opacity-20 rounded-full`}
      style={{ ...props.style, display: "block", background: "green" }}
    >
      <img src={image} alt="arrow" />
    </div>
  );
}

export default Arrow;
