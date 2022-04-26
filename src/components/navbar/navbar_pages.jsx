import React from "react";

function NavBarPages(props) {

  let textColor = 'text-primary-900'; //default color
  if (props.selected) {
    textColor = 'text-accent-600'; //if selected color
  }

  return (
    <a
      href={props.dest}
      className={`ml-3 mr-3 ${textColor} hover:text-accent-600 hover:underline block`}
    >
      {props.name}
    </a>
  );
}

export default NavBarPages;
