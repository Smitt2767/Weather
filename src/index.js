import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WeatherProvider from "./store/weather-context";
import WeatherCacheProvider from "./store/weather-cache-context";
import App from "./App";

ReactDOM.render(
  <WeatherCacheProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </WeatherCacheProvider>,
  document.getElementById("root")
);
