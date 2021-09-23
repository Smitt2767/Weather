import React from "react";
import moment from "moment";

const HourCard = ({ data }) => {
  return (
    <div className="w-32">
      <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-md shadow-xl w-32">
        <h1 className="text-2xl tracking-wide text-white">
          {moment(data.time).format("hh A")}
        </h1>
        <img
          className="h-16 w-16"
          src={`https:${data.condition.icon}`}
          alt="wheather logo"
        />
        <div className="flex flex-col text-white text-xs">
          <div className="flex gap-2 items-center justify-between">
            <span>Temp</span>
            <span>{data.temp_c}&#176;</span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span>Humidity</span>
            <span>{data.humidity}%</span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span>Cloud</span>
            <span>{data.cloud}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCard;
