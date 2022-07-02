import React from "react";

function HamburgerButton(props) {

  return (
    <button onClick={props.onClick}>
      <img className="hamburger-btn max-w-full max-h-full" src="/assets/images/icons/menu.png" alt="navbar button" />
    </button>
  );
}

export default HamburgerButton;
