import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import debounce from 'lodash-es/debounce';

import About from './about';
import Footer from './footer';
import Loading from './loading';
import NavBar from './navbar';
import Search from './search';
import WeatherCard from './weather-card';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const searchTimeoutInMs = 1000;

function viewStateReducer(state, action) {
  switch (action.type) {
    case 'error':
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };
    case 'weather_success':
      return {
        ...state,
        status: 'resolved',
        weather: action.weather,
      };
    case 'forecast_success':
      return {
        ...state,
        status: 'resolved',
        forecast: action.forecast,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const App = () => {
  const [location, setLocation] = React.useState('Eldoret');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  const [units, setUnits] = React.useState('metric');
  const [state, dispatch] = React.useReducer(viewStateReducer, {
    status: 'idle',
    error: null,
    forecast: [],
    weather: {},
  });

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeoutInMs),
    [],
  );

  const handleLocationChange = (event) => {
    if (event.target.value) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    debounceSearch(event.target.value);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, isSearching]);

  React.useEffect(() => {
    async function getWeather() {
      setIsSearching(false);

      try {
        const weather = await fetchWeather(location, units);
        if (weather) {
          dispatch({
            type: 'weather_success',
            weather: weather,
          });
        }
      } catch (err) {
        dispatch({
          type: 'error',
          error: err,
        });
      }
    }

    getWeather();
  }, [location, units]);

  React.useEffect(() => {
    async function getForecast() {
      setIsSearching(false);

      try {
        const forecast = await fetchForecast(location, units);
        if (forecast) {
          dispatch({
            type: 'forecast_success',
            forecast: forecast,
          });
        }
      } catch (err) {
        dispatch({
          type: 'error',
          error: err,
        });
      }
    }

    getForecast();
  }, [location, units]);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {state.status === 'idle' ? <Loading /> : null}
            {state.status === 'rejected' ? (
              <div className="w-3/5 md:w-3/5 lg:w-1/2 m-auto">
                <div className="mx-auto sm:max-w-xl 2xl:max-w-2xl">
                  <div
                    className="bg-red-100 font-medium text-red-700 mb-4 px-4 py-3 rounded-md relative"
                    role="alert"
                  >
                    <div className="flex">
                      <svg
                        className="flex-none mt-0.5 mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span>{state.error.message}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {(state.weather && Object.keys(state.weather).length) ||
            (state.forecast && Object.keys(state.forecast).length) ? (
              <main>
                <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
                  <Search
                    location={location}
                    isSearching={isSearching}
                    onLocationChange={handleLocationChange}
                  />
                  <WeatherCard
                    forecast={state.forecast}
                    weather={state.weather}
                    units={units}
                    onUnitsChange={handleUnitsChange}
                  />
                  <Footer />
                </div>
              </main>
            ) : null}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

async function fetchForecast(location, units) {
  const response = await window.fetch(
    `${apiUrl}/forecast/?q=${location}&units=${units}&APPID=${apiKey}`,
  );
  const forecast = await response.json();
  if (response.ok) {
    return Object.entries(forecast).length
      ? forecast.list
          .filter((f) => f.dt_txt.match(/09:00:00/))
          .map(mapDataToWeatherInterface)
      : null;
  } else {
    const error = handleServerError(response.status);
    return Promise.reject(error);
  }
}

async function fetchWeather(location, units) {
  const response = await window.fetch(
    `${apiUrl}/weather/?q=${location}&units=${units}&APPID=${apiKey}`,
  );
  const weather = await response.json();
  if (response.ok) {
    return Object.entries(weather).length
      ? mapDataToWeatherInterface(weather)
      : null;
  } else {
    const error = handleServerError(response.status);
    return Promise.reject(error);
  }
}

function handleServerError(errorCode) {
  let error;
  switch (errorCode) {
    case 401:
      error = `Looks like the API did not authorize your request. Please ensure you have a valid API key.`;
      break;
    case 404:
      error = `No results found. Check your query again or try searching for a different location.`;
      break;
    case 429:
      error = `It looks like you've made too many requests to the server. Please wait a while before trying again.`;
      break;
    default:
      error = `Server error`;
      break;
  }
  return new Error(error);
}

function mapDataToWeatherInterface(data) {
  const mapped = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt * 1000, // convert from seconds to milliseconds
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise * 1000, // convert from seconds to milliseconds
    sunset: data.sys.sunset * 1000, // convert from seconds to milliseconds
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600, // convert from seconds to hours
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
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

export default App;
