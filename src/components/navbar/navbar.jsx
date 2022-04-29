import React, {useState} from "react";
import NavBarPage from "./navbar_page";
import SearchBar from "./search_bar";
import HamburgerButton from "../buttons/hamburger";

const pages = [
  {
    name: "Home",
    dest: "/home",
  },
  {
    name: "Product",
    dest: "/product",
  },
  {
    name: "Support",
    dest: "/support",
  },
  {
    name: "Contact",
    dest: "/contact",
  },
];

const checkSelected = (props, name) => {
  if (name === props.selected) {
    return true;
  }
  return false;
}

function NavBar(props) {

  return (
    <nav className="navbar flex items-center justify-center bg-primary-400 h-16 sticky top-0 left-0 w-full z-40">
      <div className="navbar-content flex justify-around items-center h-3/5 w-4/5">
        <span className="text-accent-800 font-bold text-lg whitespace-nowrap">
          Mr Robot
        </span>
        <div className="navbar-pages flex justify-center align-center text-primary-900 text-sm">
          {pages.map((page) => (
            <NavBarPage
              name={page.name}
              dest={page.dest}
              selected={checkSelected(props, page.name)}
            />
          ))}
        </div>
        <SearchBar />
        <HamburgerButton />
      </div>
    </nav>
  );
}

export default NavBar;
