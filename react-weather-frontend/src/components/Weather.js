import React from "react";

import AppLayout from "./AppLayout";
import WeatherSearch from "./WeatherSearch";

import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";

export default function Weather(props) {
  const { city, currentWeather, forecast, onCityChange, error } = props;
  if (currentWeather && forecast) {
    const prefix = "wi wi-";
    const icon = prefix + weatherIcons.default[currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[currentWeather.icon_id].recommendation;

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
