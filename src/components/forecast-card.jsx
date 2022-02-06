import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useWeather } from '../hooks/useWeather';
import Loading from './loading';

const Forecast = ({ location, units }) => {
  const { forecast, isLoading, isError } = useWeather(
    'forecast',
    location,
    units,
  );

  if (isLoading || isError) return <Loading />;
  return (
    <>
      <div className="m-4">
        <div className="">
          {forecast.map((item, index) => {
            return (
              <ul className="mt-4" key={index}>
                <li className="flex flex-row p-1 text-gray-500 dark:text-white">
                  <span className="flex-1 text-left">
                    {dayjs(item.dt_txt).format('dddd')}
                  </span>
                  <span className="text-2xl text-indigo-700 dark:text-white">
                    <span className={item.forecastIcon}></span>
                  </span>
                  <span className="flex-1 text-right">
                    {item.min}&deg; / {item.max}&deg;
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

Forecast.propTypes = {
  location: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

export default Forecast;
