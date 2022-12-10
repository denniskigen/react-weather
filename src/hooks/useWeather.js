import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

import * as recommendations from '../recommendations';
import * as weatherIcons from '../icons';

const iconPrefix = `wi wi-`;
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export function useWeather(endpoint, location, units) {
  const apiEndpoint = `?q=${location}&units=${units}&APPID=${apiKey}`;

  const { data, error, isLoading } = useSWR(
    `${apiUrl}/${endpoint}/${apiEndpoint}`,
    fetcher,
  );

  const { weather, list } = data || {};

  return endpoint === 'weather'
    ? {
        weather: weather ? mapResponseProperties(data) : null,
        isLoading,
        isError: error,
      }
    : {
        forecast: list
          ? list
              .filter((f) => f.dt_txt.match(/09:00:00/))
              .map(mapResponseProperties)
          : null,
        isError: error,
        isLoading,
      };
}

function mapResponseProperties(data) {
  const mapped = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600, // convert from seconds to hours
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
    mapped.forecastIcon =
      iconPrefix + weatherIcons.default['day'][mapped.icon_id].icon;
  }

  if (mapped.sunset || mapped.sunrise) {
    mapped.currentTime = dayjs
      .utc(dayjs.unix(mapped.date))
      .utcOffset(mapped.timezone)
      .format();
    mapped.sunrise = dayjs
      .utc(dayjs.unix(mapped.sunrise))
      .utcOffset(mapped.timezone)
      .format();
    mapped.sunset = dayjs
      .utc(dayjs.unix(mapped.sunset))
      .utcOffset(mapped.timezone)
      .format();
    mapped.isDay =
      mapped.currentTime > mapped.sunrise && mapped.currentTime < mapped.sunset
        ? true
        : false;
    mapped.weatherIcon =
      iconPrefix +
      weatherIcons.default[mapped.isDay ? 'day' : 'night'][mapped.icon_id].icon;
    mapped.weatherRecommendation =
      recommendations.default[mapped.isDay ? 'day' : 'night'][
        mapped.icon_id
      ].recommendation;
  }

  if (data.weather[0].description) {
    mapped.description =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = Math.round(data.main.temp_max);
    mapped.min = Math.round(data.main.temp_min);
  }

  // remove undefined fields
  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key],
  );

  return mapped;
}
