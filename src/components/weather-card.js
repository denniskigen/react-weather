import React from 'react';
import dayjs from 'dayjs';
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

import Forecast from './forecast';
import * as weatherIcons from '../icons';
import * as recommendations from '../recommendations';

const WeatherCard = props => {
  const iconPrefix = `wi wi-`;
  const { weather, forecast } = props;
  const date = dayjs().isValid(weather?.date) ? weather.date : '';
  const currentTime = dayjs
    .utc(weather?.date)
    .utcOffset(weather?.timezone)
    .format();
  const sunrise = dayjs
    .utc(weather?.sunrise)
    .utcOffset(weather?.timezone)
    .format();
  const sunset = dayjs
    .utc(weather?.sunset)
    .utcOffset(weather?.timezone)
    .format();
  const isDay = currentTime > sunrise && currentTime < sunset ? true : false;
  const icon =
    iconPrefix +
    weatherIcons.default[isDay ? 'day' : 'night'][weather.icon_id].icon;
  const recommendation =
    recommendations.default[isDay ? 'day' : 'night'][weather.icon_id]
      .recommendation;

  return (
    <div className="shadow-lg rounded-xl h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4">
      <div className="m-4">
        <div className="sm">
          <p className="tracking-wide text-2xl font-semibold">
            {weather.location}, {weather.country}
          </p>
          <p className="text-gray-500 tracking-wide">
            {dayjs(date).format('dddd')},{' '}
            {dayjs(date)
              .utcOffset(weather.timezone)
              .format('h:mm A')}
            ,{' '}
            {weather.description.charAt(0).toUpperCase() +
              weather.description.slice(1)}
          </p>
        </div>
        <div className="flex flex-row justify-between my-10 lg:my-0 lg:mt-6 text-5xl text-gray-500 font-light tracking-wide">
          <span className="mt-6 md:mt-10 text-gray-700">
            {weather.temperature}&deg;C
          </span>
          <div className="text-8xl sm:text-9xl text-indigo-700">
            <span className={icon}></span>
          </div>
        </div>
        <div className="text-gray-500 tracking-wide text-sm">
          Feels like {weather.feels_like}&deg;C
        </div>{' '}
        <div className="text-indigo-700 mt-1">
          <span className="wi wi-strong-wind text-xl"></span>
          <span className="ml-1 mr-2 text-gray-500 text-sm">
            {weather.wind_speed} km/h winds
          </span>
          <span className="wi wi-humidity text-xl"></span>
          <span className="ml-1 text-gray-500 text-sm">
            {weather.humidity}% Humidity
          </span>
        </div>
        <div className="mt-10 text-center text-2xl text-gray-500 tracking-wide">
          {recommendation}
        </div>
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
};

export default WeatherCard;
