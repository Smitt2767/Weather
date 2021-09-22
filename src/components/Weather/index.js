import React, { useContext, useEffect } from "react";
import WeatherRightPanel from "./WeatherRightPanel";
import WetaherLeftPanel from "./WetaherLeftPanel";
import bgImage from "../../assets/images/bg-wheather.jpg";
import { WeatherContext } from "../../store/weather-context";
import Square from "../UI/Loader/Square";
import { Helmet } from "react-helmet";

const Weather = () => {
  const { data, getByCurrentLocation, errorMessage } =
    useContext(WeatherContext);

  useEffect(() => {
    getByCurrentLocation();
  }, [getByCurrentLocation]);

  return (
    <>
      <div
        className="w-full h-full overflow-hidden flex"
        style={{
          background: `linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.6)),
         url(${bgImage}) no-repeat center/cover`,
        }}
      >
        {data ? (
          <>
            <Helmet>
              <title>{data.location.name}</title>
              <link
                rel="icon"
                href={`https:${data.current.condition.icon}`}
              ></link>
            </Helmet>
            <div className="flex-grow">
              <WetaherLeftPanel />
            </div>
            <div className="w-2/6 ">
              <WeatherRightPanel />
            </div>
          </>
        ) : (
          <div className="flex h-full w-full justify-center items-center">
            {!errorMessage && <Square />}
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
