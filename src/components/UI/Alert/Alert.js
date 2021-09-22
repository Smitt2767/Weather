import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Alert.module.css";

const Alert = ({ message, onClose, state }) => {
  return (
    <div
      className={`fixed bottom-8 w-full flex items-center justify-center z-10 ${
        state === "entering"
          ? classes.open
          : state === "exiting"
          ? classes.close
          : ""
      }`}
    >
      <div className="bg-black bg-opacity-30 px-2 py-2 rounded-full flex items-center justify-between">
        <span className="text-white font-bold text-sm px-4">{message}</span>
        <button
          className="h-8 w-8 bg-white flex items-center justify-center rounded-full cursor-pointer focus:outline-none"
          onClick={onClose}
        >
          <AiOutlineClose className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Alert);
