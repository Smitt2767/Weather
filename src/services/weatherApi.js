import axios from "axios";

const weatherApi = axios.create({
  baseURL: "/v1",
  params: {
    key: process.env.REACT_APP_WHEATHER_API_KEY,
    days: 3,
    aqi: "no",
    alerts: "no",
  },
});

export default weatherApi;
