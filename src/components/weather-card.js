import React from 'react';
import dayjs from 'dayjs';
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

import Forecast from './forecast';
import * as weatherIcons from '../icons';
import * as recommendations from '../recommendations';

const WeatherCard = props => {
  const iconPrefix = `wi wi-`;
  const { weather, forecast, units, onUnitsChange } = props;
  const [isSettingsMenuOpened, setIsSettingsMenuOpened] = React.useState(false);
  const [isMetric, setIsMetric] = React.useState(
    units.match(/metric/i) ? true : false,
  );

  const date = dayjs().isValid(weather.date) ? weather.date : '';
  const currentTime = dayjs
    .utc(date)
    .utcOffset(weather.timezone)
    .format();
  const sunrise = dayjs
    .utc(weather.sunrise)
    .utcOffset(weather.timezone)
    .format();
  const sunset = dayjs
    .utc(weather?.sunset)
    .utcOffset(weather.timezone)
    .format();
  const isDay = currentTime > sunrise && currentTime < sunset ? true : false;
  const description =
    weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
  const icon =
    iconPrefix +
    weatherIcons.default[isDay ? 'day' : 'night'][weather.icon_id].icon;
  const recommendation =
    recommendations.default[isDay ? 'day' : 'night'][weather.icon_id]
      .recommendation;

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpened(!isSettingsMenuOpened);
  };

  const handleChange = () => {
    onUnitsChange(units.match(/metric/i) ? 'imperial' : 'metric');
    setIsMetric(!isMetric);
    toggleSettingsMenu();
  };

  return (
    <>
      <div className="shadow-lg rounded-xl h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4">
        <div className="m-4">
          <div className="sm">
            <p className="tracking-wide text-2xl font-semibold">
              {weather.location}, {weather.country}
            </p>
            <p className="text-gray-500 tracking-wide">
              {dayjs(date).format('dddd')},{' '}
              {dayjs
                .utc(date)
                .utcOffset(weather.timezone)
                .format('h:mm A')}
              , {description}
            </p>
          </div>
          <div className="flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide">
            <span className="mt-6 md:mt-10 text-gray-500 font-light">
              {weather.temperature}&deg;
              <span className="flex flex-col text-gray-500 font-normal tracking-wide text-base mt-1">
                Feels like {weather.feels_like}&deg;
              </span>{' '}
            </span>
            <div className="text-8xl sm:text-9xl mt-4 text-indigo-700">
              <span className={icon}></span>
            </div>
          </div>
          <div className="text-indigo-700 mt-1">
            <span className="wi wi-strong-wind text-xl"></span>
            <span className="ml-1 mr-2 text-gray-500 tracking-wide">
              {weather.wind_speed}
              {isMetric ? `m/s` : `mph`} winds
            </span>
            <span className="wi wi-humidity text-xl"></span>
            <span className="ml-1 text-gray-500 tracking-wide">
              {weather.humidity}% humidity
            </span>
          </div>
          <div className="mt-10 text-center text-2xl text-gray-500 tracking-wide">
            {recommendation}
          </div>
          <Forecast forecast={forecast} />
        </div>
      </div>
      <div className="w-full md:w-3/5 lg:w-1/2 m-auto mt-4">
        <button
          type="button"
          className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-green-200"
          id="user-menu"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={toggleSettingsMenu}
        >
          <span className="sr-only">Open user menu</span>
          <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 stroke-current text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        {isSettingsMenuOpened ? (
          <div
            className="origin-top mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <ul>
              <li
                onClick={handleChange}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Change units
                <br />
                <span className="text-xs text-indigo-500">
                  {isMetric ? 'Imperial' : 'Metric'}{' '}
                  {isMetric ? `(F°, mph)` : `(C°, m/s)`}
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default WeatherCard;
