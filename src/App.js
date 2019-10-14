import React from "react";
import Weather from "./Weather";
import { Container } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Eldoret",
      currentWeather: {},
      forecast: []
    };
  }

  componentDidMount() {
    const weatherUrl = `${process.env.REACT_APP_API_URL}/weather/?q=${this.state.city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

    fetch(weatherUrl)
      .then(weather => weather.json())
      .then(weather => {
        const mappedData = this.mapDataToWeatherInterface(weather);

        this.setState({
          currentWeather: mappedData
        });
      });

    const forecastUrl = `${process.env.REACT_APP_API_URL}/forecast/?q=${this.state.city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

    fetch(forecastUrl)
      .then(forecast => forecast.json())
      .then(result => {
        const forecast = [];
        for (let i = 0; i < result.list.length; i += 8) {
          forecast.push(this.mapDataToWeatherInterface(result.list[i + 4]));
        }

        this.setState({
          forecast: forecast
        })
      });
  }

  mapDataToWeatherInterface = data => {
    const mapped = {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      humidity: data.main.humidity,
      icon_id: data.weather[0].id,
      image: `${process.env.REACT_APP_ICON_URL}${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description,
      wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
      condition: data.cod
    };

    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }

    if (data.weather[0].icon) {
      mapped.icon = data.weather[0].icon;
    }

    if (data.main.temp_min && data.main.temp_max) {
      mapped.max = data.main.temp_max;
      mapped.min = data.main.temp_min;
    }

    // remove undefined fields
    Object.keys(mapped).forEach(
      key => mapped[key] === undefined && delete data[key]
    );

    return mapped;
  };

  render() {
    const { currentWeather, forecast } = this.state;

    if (Object.keys(currentWeather).length && Object.keys(forecast).length) {
      return (
        <Container maxWidth="sm">
          <Weather currentWeather={currentWeather} forecast={forecast} />
        </Container>
      );
    } else {
      return <span>Loading...</span>;
    }
  }
}

export default App;
