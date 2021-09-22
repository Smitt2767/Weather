import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-context";
import HourCard from "../Card/HourCard";
import moment from "moment";

const Hourly = () => {
  const { data, date } = useContext(WeatherContext);
  return (
    <>
      <h1 className="text-white mb-2 tracking-widest text-2xl">
        {moment(date).format("dddd")}
      </h1>
      <div className="w-full flex gap-2 overflow-x-auto mb-10 py-2">
        {data.forecast.forecastday
          .find((data) => data.date === date)
          .hour.filter((data) => moment(data.time).isAfter(new Date()))
          .map((weatherData) => (
            <HourCard key={weatherData.time} data={weatherData} />
          ))}
      </div>
    </>
  );
};

export default Hourly;
