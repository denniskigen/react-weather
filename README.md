# react-weather [![build](https://github.com/denniskigen/react-weather/actions/workflows/ci.yml/badge.svg)](https://github.com/denniskigen/react-weather/actions/workflows/validate.yml) ![Deployment status](https://img.shields.io/github/deployments/denniskigen/react-weather/production?label=vercel&logo=vercel&logoColor=white) [![Coverage Status](https://coveralls.io/repos/github/denniskigen/react-weather/badge.svg?branch=main)](https://coveralls.io/github/denniskigen/react-weather?branch=main)

> If you like React Weather, you'll :heart: [React Weather Next](https://react-weather-next.denniskigen.com)!

React Weather is a beautiful weather app that uses the [OpenWeatherMap API](https://openmweathermap.org/api).

[See it live](https://react-weather.denniskigen.com)

![Home page](https://github.com/denniskigen/react-weather/blob/main/public/screen.png)

## Getting started

- Sign up over at [openweathermap.org](https://openweathermap.org/appid) and get an API key.
- Fork the project and clone it locally.
- Create a file at the root of the project called `.env.local` with the following contents:

  ```sh
  VITE_API_URL = 'https://api.openweathermap.org/data/2.5'
  VITE_API_KEY = The API key you obtained from openweathermap.org
  VITE_ICON_URL = 'https://openweathermap.org/img/w'
  ```

- Install dependencies using [pnpm](https://pnpm.io/installation):

  ```sh
  pnpm install
  ```
