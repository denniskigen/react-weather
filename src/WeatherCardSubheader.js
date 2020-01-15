import React from "react";
import dayjs from "dayjs";

export default function WeatherCardSubHeader(props) {
  const date = dayjs().isValid(props.currentWeather.date)
    ? props.currentWeather.date
    : "";
  const description = props.currentWeather.description
    ? props.currentWeather.description
    : "";

  return (
    <>
      <span data-testid="subheaderContent">
        {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
        {dayjs(date).format("A")},{" "}
        {description.replace(/\w\S*/g, txt => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </span>
    </>
  );
}
