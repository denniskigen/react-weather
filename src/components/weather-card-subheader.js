import React from "react";
import dayjs from "dayjs";
var utc = require("dayjs/plugin/utc"); // dependent on utc plugin
dayjs.extend(utc);

export default function WeatherCardSubHeader(props) {
  const { currentWeather } = props;
  const date = dayjs().isValid(currentWeather.date) ? currentWeather.date : "";
  const description = currentWeather.description
    ? currentWeather.description
    : "";

  return (
    <>
      <span>
        {dayjs(date).format("dddd")},{" "}
        {dayjs(date)
          .utcOffset(currentWeather.timezone)
          .format("h:mm A")}
        ,{" "}
        {description.replace(/\w\S*/g, txt => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </span>
    </>
  );
}
