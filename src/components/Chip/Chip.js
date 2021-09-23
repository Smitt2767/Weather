import React from "react";

const Chip = ({ title, onClick }) => {
  return (
    <button
      className="text-white bg-white bg-opacity-10 p-2 text-sm rounded-full cursor-pointer hover:bg-opacity-20"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Chip;
