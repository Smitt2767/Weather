import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-context";
import Card from "../Card/Card";

const NextDays = () => {
  const { data, date, setDate } = useContext(WeatherContext);
  const handleClick = (value) => {
    setDate(value);
  };
  return (
    <div className="py-10 text-gray-200 rounded-lg">
      <h1 className="text-xl font-bold mb-6">Next Days</h1>
      <div className="flex gap-3 flex-wrap">
        {data.forecast.forecastday.map((day) => (
          <Card
            key={day.date}
            day={day}
            active={date === day.date}
            onClick={handleClick.bind(null, day.date)}
          />
        ))}
      </div>
    </div>
  );
};

export default NextDays;
