import React, { useState, useContext, useEffect } from "react";
import WeatherSearch from "./WeatherSearch";
import { WeatherContext } from "../../store/weather-context";
import WeatherDetails from "./WeatherDetails";
import NextDays from "./NextDays";
import weatherApi from "../../services/weatherApi";
import Locations from "./Locations";
import RecentSearches from "./RecentSearches";
import Square from "../UI/Loader/Square";

const WheatherRightPanel = () => {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const { search, isLoading } = useContext(WeatherContext);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!location) setLocations([]);
      else {
        (async () => {
          try {
            const res = await weatherApi.get(`/search.json?q=${location}`);
            if (res.status && res.data) {
              setLocations(res.data.slice(0, 5));
            }
          } catch (err) {
            setLocations([]);
          }
        })();
      }
    }, 500);
    return () => clearTimeout(id);
  }, [location]);

  const onInputValueChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    search(location);
    setLocation("");
    setLocations([]);
  };

  const handleLocationClick = (url) => {
    search(url);
    setLocation("");
    setLocations([]);
  };

  return (
    <div className="h-full w-full bg-black bg-opacity-20 backdrop-filter backdrop-blur-xl pb-20">
      <WeatherSearch
        location={location}
        onChange={onInputValueChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <div className="h-full w-full overflow-y-auto p-10">
        {location && !!!locations.length ? (
          <Square />
        ) : !!locations.length ? (
          <Locations locations={locations} onClick={handleLocationClick} />
        ) : null}
        <RecentSearches />
        <WeatherDetails />
        <NextDays />
      </div>
    </div>
  );
};

export default WheatherRightPanel;
