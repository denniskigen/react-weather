import React from "react";
import dayjs from "dayjs";

import AppLayout from "./app-layout";
import WeatherSearch from "./weather-search";

import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";

const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export default function Weather(props) {
  const { city, currentWeather, forecast, onCityChange, error } = props;
  if (currentWeather && forecast) {
    const prefix = "wi wi-";
    const currentTime = dayjs
      .utc(currentWeather.date)
      .utcOffset(currentWeather.timezone)
      .format();
    const sunrise = dayjs
      .utc(currentWeather.sunrise)
      .utcOffset(currentWeather.timezone)
      .format();
    const sunset = dayjs
      .utc(currentWeather.sunset)
      .utcOffset(currentWeather.timezone)
      .format();

    const timeOfDay =
      currentTime > sunrise && currentTime < sunset ? "day" : "night";
    const icon =
      prefix + weatherIcons.default[timeOfDay][currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[timeOfDay][currentWeather.icon_id].recommendation;

    return (
      <div>
        <WeatherSearch city={city} onCityChange={onCityChange} error={error} />
        <AppLayout
          currentWeather={currentWeather}
          forecast={forecast}
          icon={icon}
          recommendation={recommendation}
        />
      </div>
    );
  }
}
