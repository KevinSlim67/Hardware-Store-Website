import React from "react";
import NavBarPages from "./navbar_pages";
import SearchBar from "./search_bar";
import HamburgerButton from "../buttons/hamburger";

function NavBar() {
  return (
    <nav className="flex items-center justify-center bg-primary-400 h-16 sticky top-0 left-0 w-full z-40">
      <div className="navbar-content flex justify-around items-center h-3/5 w-4/5">
        <span className="text-accent-800 font-bold text-lg whitespace-nowrap">
          Mr Robot
        </span>
        <div
          className="navbar-pages flex justify-center align-center text-primary-900 text-sm"
        >
          <NavBarPages name="Home" dest="" selected={true} />
          <NavBarPages name="Product" dest="" selected={false} />
          <NavBarPages name="Support" dest="" selected={false} />
          <NavBarPages name="Contact" dest="" selected={false}/>
        </div>
        <SearchBar />
        <HamburgerButton />
      </div>
    </nav>
  );
}

export default NavBar;
