import React from "react";

const ListItem = ({ title, children, onClick }) => {
  return (
    <div
      className={`py-2 flex justify-between items-center text-gray-400 text-lg  ${
        !!onClick ? "cursor-pointer hover:text-gray-300" : ""
      }`}
      onClick={onClick}
    >
      <span>{title}</span>
      <span>{children}</span>
    </div>
  );
};

export default ListItem;
