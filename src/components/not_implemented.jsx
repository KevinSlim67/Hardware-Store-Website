import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayNone } from "../features/notImplemented";

function NotImplemented() {

  const notImplemented = useSelector((state) => state.notImplemented.value);
  const dispatch = useDispatch();

  const displayStyle = {
    display: notImplemented,
  };

  const hide = () => {
    dispatch(displayNone());
  };


  return (
    <div style={displayStyle} className="justify-center fixed bottom-5 h-16 w-full center text-gray-900">
      <div className="h-full w-[32rem] max-w-[95%] bg-red-500 border-[1px] border-red-500 border-opacity-80 bg-opacity-60 rounded">
        <div className="flex h-full justify-between items-center pb-2 pt-2 pr-5 pl-5">
          <div className="">Sorry, this feature has not been implemented!</div>
          <button onClick={hide} className="x-btn text-sm">x</button>
        </div>
      </div>
    </div>
  );
}

export default NotImplemented;
