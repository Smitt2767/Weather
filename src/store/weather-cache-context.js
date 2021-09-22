import React, { createContext, useCallback, useState } from "react";

export const WeatherCacheContext = createContext({ weathercacheData: [] });

const WeatherCacheProvider = ({ children }) => {
  const [weatherCacheData, setWeatherCacheData] = useState([]);

  const setCache = useCallback((value) => {
    setWeatherCacheData((prevState) => [value, ...prevState.slice(0, 3)]);
  }, []);

  return (
    <WeatherCacheContext.Provider value={{ weatherCacheData, setCache }}>
      {children}
    </WeatherCacheContext.Provider>
  );
};

export default WeatherCacheProvider;
