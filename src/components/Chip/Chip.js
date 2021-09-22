import React from "react";

const Chip = ({ title, onClick }) => {
  return (
    <button
      className="text-white bg-black bg-opacity-20 p-2 text-xs rounded-full cursor-pointer hover:bg-opacity-40"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Chip;
