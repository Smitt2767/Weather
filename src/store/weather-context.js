import React, {
  createContext,
  useReducer,
  useCallback,
  useContext,
} from "react";
import weatherApi from "../services/weatherApi";
import { WeatherCacheContext } from "./weather-cache-context";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SETWEATHERDATA": {
      return {
        ...state,
        data: payload,
        date: !state.date ? payload.forecast.forecastday[0].date : state.date,
      };
    }
    case "SETLOADING": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "SETERROR": {
      return {
        ...state,
        errorMessage: payload,
      };
    }
    case "SETDATE": {
      return {
        ...state,
        date: payload,
      };
    }
    case "SETCHARTTAB": {
      return {
        ...state,
        chartTab: payload,
      };
    }
    default:
      return state;
  }
};

export const WeatherContext = createContext({
  data: null,
  errorMessage: "",
  isLoading: false,
  date: "",
  chartTab: {
    name: "temp",
    color: "#E7CFBF",
  },
});

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    errorMessage: "",
    isLoading: false,
    date: "",
    chartTab: {
      name: "temp",
      color: "#E7CFBF",
    },
  });
  const { setCache } = useContext(WeatherCacheContext);

  const setErrorMessage = (message) => {
    dispatch({ type: "SETERROR", payload: message });
  };

  const search = useCallback(
    async (location) => {
      try {
        dispatch({ type: "SETLOADING", payload: true });
        const res = await weatherApi.get(`/forecast.json?q=${location}`);
        if (res.status && res.data) {
          dispatch({ type: "SETWEATHERDATA", payload: res.data });
          setCache(res.data);
          dispatch({ type: "SETLOADING", payload: false });
        }
      } catch (err) {
        if (err.response.data) {
          setErrorMessage(err.response.data.error.message);
        }
        dispatch({ type: "SETLOADING", payload: false });
      }
    },
    [setCache]
  );

  const getByCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          dispatch({ type: "SETLOADING", payload: true });
          const res = await weatherApi.get(
            `/forecast.json?q=${latitude},${longitude}`
          );
          if (res.status && res.data) {
            dispatch({ type: "SETWEATHERDATA", payload: res.data });
            setCache(res.data);
            dispatch({ type: "SETLOADING", payload: false });
          }
        } catch (err) {
          if (err.response.data) {
            setErrorMessage(err.response.data.error.message);
          }
          dispatch({ type: "SETLOADING", payload: false });
        }
      },
      (err) => {
        setErrorMessage(`Pls allow location permission!`);
      }
    );
  }, [setCache]);

  const setDate = (date) => {
    dispatch({ type: "SETDATE", payload: date });
  };

  const setWeatherData = (data) => {
    dispatch({ type: "SETWEATHERDATA", payload: data });
  };

  const setChartTab = (data) => {
    dispatch({ type: "SETCHARTTAB", payload: data });
  };

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        search,
        getByCurrentLocation,
        setErrorMessage,
        setWeatherData,
        setDate,
        setChartTab,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
