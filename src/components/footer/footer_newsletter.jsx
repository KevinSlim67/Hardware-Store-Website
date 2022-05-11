import React from "react";
import { useDispatch } from "react-redux";
import { displayFlex } from "../../features/notImplemented";
import Button from "../buttons/button";

function FooterNewsLetter() {

  const dispatch = useDispatch();

  let focus =
    "focus:outline-2 focus:outline focus:outline-primary-200 focus:outline";
  return (
    <div className="footer-section flex flex-col items-center w-1/3 mt-10">
      <h4 className="text-primary-900 text-center text-[1.3rem] w-[70%] mb-5 font-semibold ">
        Want to stay updated with our latest offers ?
      </h4>
      <div className="flex text-primary-900 flex-col justify-center items-center w-[70%] max-w-[19rem]">
        <input
          className={`${focus} bg-white w-full rounded-[10px] pr-4 pl-4 border-solid border-[1px] border-primary-400 border-opacity-20 h-10`}
        />
        <Button
          text="Sign Up"
          className="m-5 pt-2 pb-2 pr-4 pl-4"
          function={() => dispatch(displayFlex())}
        />
      </div>
    </div>
  );
}

export default FooterNewsLetter;
