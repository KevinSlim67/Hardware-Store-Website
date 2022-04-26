import React from "react";

function SearchBar() {
    let focus = "focus:outline-2 focus:outline focus:outline-primary-200 focus:outline"
  return (
    <input className={`search-bar min-w-0 h-full bg-secondary rounded pr-4 pl-4 text-primary-900 justify-self-end ${focus}`} />
  );
}

export default SearchBar;
