import React from "react";

import AppLayout from "./AppLayout";
import NavBar from "./NavBar";
import WeatherSearch from "./WeatherSearch";

import * as weatherIcons from "../icons";
import * as recommendations from "../recommendations";

export default function Weather(props) {
  if (props.currentWeather && props.forecast) {
    const { city, currentWeather, forecast, setCity, error } = props;
    const prefix = "wi wi-";
    const icon =
      prefix + weatherIcons.default[props.currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[props.currentWeather.icon_id].recommendation;

    return (
      <div>
        <NavBar />
        <WeatherSearch city={city} setCity={setCity} error={error} />
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
