import React from "react";

import AppLayout from "./AppLayout";
import WeatherSearch from "./WeatherSearch";

import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";

export default function Weather(props) {
  const { city, currentWeather, forecast, onCityChange, error } = props;
  if (currentWeather && forecast) {
    const now = new Date();
    // Convert to UTC Date
    const date = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    const prefix = "wi wi-";
    const sunrise = new Date(currentWeather.sunrise);
    const sunset = new Date(currentWeather.sunset);
    const timeOfDay = date > sunrise && date < sunset ? "day" : "night";
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
