import React from "react";

const Tabs = ({ onClick, data, activeTab }) => {
  return (
    <div className="w-full h-12 flex gap-2 items-center mb-3 ">
      {data.map((tab) => (
        <button
          className={`text-white bg-black font-bold ${
            activeTab.name === tab.name ? "bg-white font-bold" : ""
          } px-4 py-1 text-sm bg-opacity-20 rounded-full hover:bg-opacity-30 capitalize focus:outline-none`}
          key={tab.name}
          onClick={() => onClick(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
