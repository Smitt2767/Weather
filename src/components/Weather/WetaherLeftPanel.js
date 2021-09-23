import React, { useContext } from "react";
import { WeatherContext } from "../../store/weather-context";
import moment from "moment";
import { MdPlace } from "react-icons/md";
import Hourly from "./Hourly";
import Chart from "../Chart/Chart";
import Tabs from "../Tabs/Tabs";

const tabsData = [
  { name: "temp", color: "#E7CFBF" },
  { name: "humidity", color: "#30C9E8" },
  { name: "cloud", color: "#66A1EE" },
  { name: "rain", color: "#3080E8" },
];

const WetaherLeftPanel = () => {
  const { data, date, setChartTab, chartTab } = useContext(WeatherContext);

  const handleClick = (value) => {
    setChartTab(value);
  };

  return (
    <div className="h-full w-full relative">
      <div className="absolute bottom-24 w-full px-28">
        <h1 className="mb-8 tracking-widest text-6xl text-white ">
          {moment(date).format("dddd")}
        </h1>
        <Tabs data={tabsData} onClick={handleClick} activeTab={chartTab} />
        <Chart
          data={data.forecast.forecastday
            .find((data) => data.date === date)
            .hour.filter((data) => moment(data.time).isAfter(new Date()))
            .map((data) => ({
              time: moment(data.time).format("ha"),
              temp: data.temp_c,
              humidity: data.humidity,
              cloud: data.cloud,
              rain: data.chance_of_rain,
            }))}
          chartTab={chartTab}
        />
        <Hourly />
        <div className="flex items-center text-gray-100">
          <div className="flex">
            <h1 className="text-8xl flex-none">{data.current.temp_c}</h1>
            <span className="border-8 border-white h-8 w-8 rounded-full ml-1 flex-none"></span>
          </div>

          <div className="flex flex-col mx-4 self-end flex-grow">
            <h1 className="text-4xl ">{data.location.name}</h1>
            <p className="text-gray-200 my-1 flex items-center ">
              <MdPlace />
              <span className="ml-1 text-sm">
                {data.location.region}, {data.location.country}
              </span>
            </p>
            <p className="text-gray-200 text-lg ">
              {moment(data.location.localtime).format(
                "HH:mm - dddd, DD MMM 'YY"
              )}
            </p>
          </div>
          <div className="flex flex-col items-end self-end flex-none">
            <img
              src={`https:${data.current.condition.icon}`}
              alt="wheather logo"
              className="h-16 w-16"
            />
            <p className="text-gray-200 text-lg">
              {data.current.condition.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetaherLeftPanel;
