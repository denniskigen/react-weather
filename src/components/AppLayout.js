import React from "react";
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

  return (
    <div className={classes.layout}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WeatherCard
            currentWeather={props.currentWeather}
            forecast={props.forecast}
            icon={props.icon}
            recommendation={props.recommendation}
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

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.currentWeather.city + ", " + props.currentWeather.country}
        subheader={
          <WeatherCardSubheader currentWeather={props.currentWeather} />
        }
      />
      <CardContent>
        <CardMedia
          className={`${props.icon} ${classes.wi}`}
          src={props.icon}
          style={{ fontSize: "128px", float: "right" }}
        />
        <Typography
          variant="h2"
          className="big-temp"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {Math.round(props.currentWeather.temperature)}&deg;C
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
          {props.currentWeather.wind_speed} km/h Winds{" "}
          <span
            className={`${humidity} ${classes.wi} ${classes.atmospheric}`}
          ></span>
          {props.currentWeather.humidity}% Humidity
        </Typography>
        <Typography
          className={`${classes.recommendation} recommendation`}
          color="textPrimary"
          gutterBottom
        >
          {props.recommendation}
        </Typography>
        <Divider variant="middle" />
        <Forecast forecast={props.forecast} />
      </CardContent>
    </Card>
  );
};
