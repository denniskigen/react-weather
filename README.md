# react-weather [![CircleCI](https://circleci.com/gh/denniskigen/react-weather.svg?style=svg)](https://circleci.com/gh/denniskigen/react-weather) [![Netlify Status](https://api.netlify.com/api/v1/badges/142b6577-41bb-4d21-846a-096cd87214af/deploy-status)](https://app.netlify.com/sites/yet-another-react-weather-app/deploys)

A simple React weather app that displays weather information from the OpenWeatherMap API.

![Home page](https://github.com/denniskigen/react-weather/blob/master/public/screen.png)

## Getting started

- Sign up over at [openweathermap.org](https://openweathermap.org/appid) to get an API key.
- Fork the project and clone it locally.
- Create a file at the root of the project called `.env.local` with the following contents:

```sh
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = The API key you obtained from openweathermap.org
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```
