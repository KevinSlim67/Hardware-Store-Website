import React from "react";


function RoutingButton(props) {
  return (
    <a
      className={`bg-accent-400 hover:bg-accent-200 active:bg-accent-200 rounded-[30px] text-secondary ${props.className}`}
      href={props.dest}
    >
      {props.text}
    </a>
  );
}

export default RoutingButton;
