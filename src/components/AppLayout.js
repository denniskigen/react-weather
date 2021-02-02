import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import Forecast from "./Forecast";
import WeatherCardSubheader from "./WeatherCardSubheader";

const useStyles = makeStyles(theme => ({
  atmospheric: {
    fontSize: "28px",
    padding: "5px"
  },
  buttons: {
    color: "black"
  },
  card: {
    minWidth: 600,
    minHeight: 600
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  error: {
    color: "red",
    padding: "10px"
  },
  fullList: {
    width: "auto"
  },
  layout: {
    marginTop: "20px"
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  recommendation: {
    fontFamily: "Montserrat, sans-serif",
    padding: "20px 0px 10px 0px",
    fontSize: "26px",
    textAlign: "center"
  },
  root: {
    flexiGrow: 1,
    color: "black"
  },
  search: {
    marginTop: "100px"
  },
  wi: {
    color: "#673ab7"
  }
}));

export default function AppLayout(props) {
  const classes = useStyles();
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={currentWeather}
            forecast={forecast}
            icon={icon}
            recommendation={recommendation}
          />
        </Grid>
      </Grid>
    </div>
  );
}

const WeatherCard = props => {
  const classes = useStyles();
  const humidity = "wi wi-humidity";
  const strongWind = "wi wi-strong-wind";
  const { currentWeather, forecast, icon, recommendation } = props;
  const [temperatureFormat, setTemperatureFormat] = useState("C");

  const handleTemperatureFormat = (event, newFormat) => {
    setTemperatureFormat(newFormat);
  };
  const getTemperature = useCallback(
    t => {
      if (temperatureFormat === "C") {
        return t;
      } else {
        return Math.round(t * 1.8 + 32);
      }
    },
    [temperatureFormat]
  );
  return (
    <Card className={classes.card}>
      <CardHeader
        title={currentWeather.city + ", " + currentWeather.country}
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
      />
      <CardContent>
        <RadioGroup
          row
          aria-label="temperature format"
          name="temperature format"
          value={temperatureFormat}
          onChange={handleTemperatureFormat}
        >
          <FormControlLabel
            value="F"
            control={<Radio color="primary" />}
            label="&deg;F"
            labelPlacement="top"
          />
          <FormControlLabel
            value="C"
            control={<Radio color="primary" />}
            label="&deg;C"
            labelPlacement="top"
          />
        </RadioGroup>
        <CardMedia
          className={`${icon} ${classes.wi}`}
          src={icon}
          style={{ fontSize: "128px", float: "right" }}
        />
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {getTemperature(currentWeather.temperature)}&deg;{temperatureFormat}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Feels like {getTemperature(currentWeather.feels_like)}&deg;
          {temperatureFormat}
        </Typography>
        <Typography
          variant="subtitle2"
          className="atmospheric-conditions"
          color="textSecondary"
          gutterBottom
          style={{ paddingTop: "40px" }}
        >
          <span
            className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {currentWeather.wind_speed} km/h Winds{" "}
          <span
            className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {currentWeather.humidity}% Humidity
        </Typography>
        <Typography
          className={`${classes.recommendation} recommendation`}
          color="textPrimary"
          gutterBottom
        >
          {recommendation}
        </Typography>
        <Divider variant="middle" />
        <Forecast forecast={forecast} getTemperature={getTemperature} />
      </CardContent>
    </Card>
  );
};
