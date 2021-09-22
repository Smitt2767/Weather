import React from "react";
import moment from "moment";

const Card = ({ day, active, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center p-4 bg-white hover:bg-opacity-20 cursor-pointer ${
        active ? "bg-opacity-20" : "bg-opacity-10"
      } rounded-md shadow-xl w-32`}
      onClick={onClick}
    >
      <h1 className="text-2xl tracking-wide">
        {moment(day.date).format("ddd")}
      </h1>
      <img
        className="h-16 w-16"
        src={`http:${day.day.condition.icon}`}
        alt="wheather logo"
      />
      <div className="flex gap-2 items-center mt-1">
        <span className="text-sm font-bold">{day.day.maxtemp_c}&#176;</span>
        <span className="text-sm text-gray-400 font-bold">
          {day.day.mintemp_c}&#176;
        </span>
      </div>
    </div>
  );
};

export default Card;
