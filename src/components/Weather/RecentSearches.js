import React, { useContext } from "react";
import ListItem from "../List/ListItem";
import { WeatherCacheContext } from "../../store/weather-cache-context";
import { WeatherContext } from "../../store/weather-context";

const RecentSearches = () => {
  const { weatherCacheData } = useContext(WeatherCacheContext);
  const { setWeatherData, data } = useContext(WeatherContext);

  const handleClick = (newData) => {
    if (
      newData.location.name !== data.location.name ||
      newData.current.last_updated !== data.current.last_updated
    ) {
      setWeatherData(newData);
    }
  };

  return (
    <div className="py-10 text-gray-200 border-b-2 border-gray-400">
      <h1 className="text-xl font-bold mb-6">Recent Search</h1>
      {weatherCacheData.map((weatherData, i) => (
        <ListItem
          key={i}
          title={weatherData.location.name}
          onClick={handleClick.bind(null, weatherData)}
        ></ListItem>
      ))}
    </div>
  );
};

export default RecentSearches;
