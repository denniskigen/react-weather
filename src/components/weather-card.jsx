import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import Loading from './loading';
import { useWeather } from '../hooks/useWeather';

const WeatherCard = ({ location, units }) => {
  const isMetric = units.match(/metric/i) ? true : false;
  const { weather, isLoading, isError } = useWeather(
    'weather',
    location,
    units,
  );

  if (isLoading || isError) return <Loading />;
  return (
    <>
      <div className="m-4">
        <div className="sm">
          <p className="tracking-wide text-2xl dark:text-white font-semibold">
            {weather.location}, {weather.country}
          </p>
          <p className="text-gray-500 dark:text-gray-400 tracking-wide">
            {dayjs(weather.date).format('dddd')},{' '}
            {dayjs
              .utc(weather.date)
              .utcOffset(weather.timezone)
              .format('h:mm A')}
            , {weather.description}
          </p>
        </div>
        <div className="flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide">
          <span className="mt-6 md:mt-10 text-gray-500 dark:text-white font-light">
            {weather.temperature}&deg;
            <span className="flex flex-col text-gray-500 dark:text-gray-400 font-normal tracking-wide text-base mt-1">
              Feels like {weather.feels_like}&deg;
            </span>{' '}
          </span>
          <div className="text-8xl sm:text-9xl mt-4 text-indigo-700 dark:text-white">
            <span className={weather.weatherIcon}></span>
          </div>
        </div>
        <div className="text-indigo-700 dark:text-gray-400 mt-1">
          <span className="wi wi-strong-wind text-xl"></span>
          <span className="ml-1 mr-2 text-gray-500 dark:text-white tracking-wide">
            {weather.wind_speed}
            {isMetric ? `m/s` : `mph`} winds
          </span>
          <span className="wi wi-humidity text-xl"></span>
          <span className="ml-1 text-gray-500 dark:text-white tracking-wide">
            {weather.humidity}% humidity
          </span>
        </div>
        <div className="mt-10 text-center text-2xl text-gray-500 dark:text-white tracking-wide mb-4">
          {weather.weatherRecommendation}
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
