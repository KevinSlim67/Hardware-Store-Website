import React from "react";
import { useSelector } from "react-redux";

function MobileNavBar(props) {

    //sets the display value as either hide or block in order to show the navbar or not
    const display = useSelector((state) => state.mobileNavBar.display);
    const style = {
        display: display
    }

  return (
    <ul className="absolute right-2 top-16 w-[14rem] bg-primary-200 rounded-[5px]
     p-2 pr-4 pl-4 border-[1px] border-primary-700 border-opacity-70"
     style={style}>
      {props.pages.map((p) => (
        <li key={`${p.name}-mobile-page`}>
          <a href={p.dest} className="text-[1.5rem] text-primary-800 hover:text-accent-400">{p.name}</a>
          {p.name !== 'Support' &&
            <hr className="border-primary-800"/>}
        </li>
      ))}
    </ul>
  );
}

export default MobileNavBar;
