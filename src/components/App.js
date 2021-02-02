import React, { useEffect, useState } from "react";
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";

import Weather from "./Weather";
import NavBar from "./NavBar";

const geolocationOptions = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

export default function App() {
  const [geoInitialized, setGeoInitialized] = useState(false);
  const [city, setCity] = useState(localStorage.getItem("city") || "Eldoret");
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(
    JSON.parse(localStorage.getItem("weather")) || {}
  );
  const [forecast, setForecast] = useState(
    JSON.parse(localStorage.getItem("forecast")) || []
  );

  function geolocationGranted(pos) {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => handleResponse(res))
      .then(weather => {
        setCity(weather.name);
        setError(null);
        setGeoInitialized(true);
      })
      .catch(err => {
        setGeoInitialized(true);
      });
  }

  function geolocationDenied(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(result => {
          if (result.state === "granted" || result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              geolocationGranted,
              geolocationDenied,
              geolocationOptions
            );
          } else {
            setGeoInitialized(true);
          }
        })
        .catch(err => {
          setGeoInitialized(true);
        });
    } else {
      setGeoInitialized(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(currentWeather));
  }, [currentWeather]);

  useEffect(() => {
    localStorage.setItem("forecast", JSON.stringify(forecast));
  }, [forecast]);

  useEffect(() => {
    if (geoInitialized && city !== localStorage.getItem("city")) {
      getWeather(city)
        .then(weather => {
          setCurrentWeather(weather);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
        });
      getForecast(city)
        .then(data => {
          setForecast(data);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
        });
      localStorage.setItem("city", city);
    }
  }, [city, error, geoInitialized]);

  const handleCityChange = city => {
    setCity(city);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      fontSize: 14,
      h5: {
        fontWeight: 600
      }
    }
  });

  if (
    (currentWeather && Object.keys(currentWeather).length) ||
    (forecast && Object.keys(forecast).length)
  ) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="sm">
          <Weather
            city={city}
            currentWeather={currentWeather}
            forecast={forecast}
            onCityChange={handleCityChange}
            error={error}
          />
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <div>
        <CircularProgress color={error ? "secondary" : "primary"} />
        {error ? <p>{error}</p> : ""}
      </div>
    );
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: " + response.statusText.toLowerCase());
  }
}

function getWeather(city) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  )
    .then(res => handleResponse(res))
    .then(weather => {
      if (Object.entries(weather).length) {
        const mappedData = mapDataToWeatherInterface(weather);
        return mappedData;
      }
    });
}

function getForecast(city) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  )
    .then(res => handleResponse(res))
    .then(forecastData => {
      if (Object.entries(forecastData).length) {
        return forecastData.list
          .filter(forecast => forecast.dt_txt.match(/09:00:00/))
          .map(mapDataToWeatherInterface);
      }
    });
}

function mapDataToWeatherInterface(data) {
  const mapped = {
    city: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt * 1000,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise * 1000,
    sunset: data.sys.sunset * 1000,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 60,
    wind_speed: Math.round(data.wind.speed * 3.6) // convert from m/s to km/h
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
    ([key, value]) => value === undefined && delete mapped[key]
  );

  return mapped;
}
