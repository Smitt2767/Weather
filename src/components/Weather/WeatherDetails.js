import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-context";
import ListItem from "../List/ListItem";

const WeatherDetails = () => {
  const { data } = useContext(WeatherContext);

  return (
    <div className="py-10 text-gray-200 border-b-2 border-gray-400">
      <h1 className="text-xl font-bold mb-6">Weather Details</h1>
      <ListItem title="Feelslike">{data.current.feelslike_c}&#176;</ListItem>
      <ListItem title="Cloudy">{data.current.cloud}%</ListItem>
      <ListItem title="Humidity">{data.current.humidity}%</ListItem>
      <ListItem title="Wind">{data.current.wind_kph}km/h</ListItem>
    </div>
  );
};

export default WeatherDetails;
