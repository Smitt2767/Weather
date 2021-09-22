import React from "react";

const Tabs = ({ onClick, data, activeTab }) => {
  return (
    <div className="w-full h-12 flex gap-3 items-center mb-3 pl-16">
      {data.map((tab) => (
        <button
          className={`text-white bg-black font-bold ${
            activeTab.name === tab.name ? "bg-opacity-50" : "bg-opacity-20"
          } px-4 py-1 text-sm rounded-full hover:bg-opacity-50 capitalize`}
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
