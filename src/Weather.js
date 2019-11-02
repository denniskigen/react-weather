import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Divider,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";

import about from "./about.png";
import logo from "./logo.svg";

import dayjs from "dayjs";
import * as weatherIcons from "./icons";
import * as recommendations from "./recommendations";
import useDebounce from "./use-debounce";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none"
  },
  appLogo: {
    width: "160px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  layout: {
    marginTop: "20px"
  },
  card: {
    minWidth: 600,
    minHeight: 600
  },
  wi: {
    color: "#673ab7"
  },
  atmospheric: {
    fontSize: "28px",
    padding: "5px"
  },
  recommendation: {
    fontFamily: "Montserrat, sans-serif",
    padding: "20px 0px 10px 0px",
    fontSize: "26px",
    textAlign: "center"
  },
  buttons: {
    color: "black"
  },
  list: {
    width: 400
  },
  fullList: {
    width: "auto"
  },
  aboutImg: {
    padding: "30px 150px 0px 150px",
    width: "100px"
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "30px"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  search: {
    marginTop: "100px"
  },
  error: {
    color: "red",
    padding: "10px"
  }
}));

const WeatherSearch = props => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  let [isSearching, setSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const hasError = props.error ? true : false;

  useEffect(() => {
    if (debouncedSearchTerm) {
      props.setCity(debouncedSearchTerm);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setSearching((isSearching = false));
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={classes.search}>
      <Grid container alignItems="flex-end">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <FormControl>
            <Input
              id="search-city"
              error={hasError}
              placeholder="Enter city name"
              onChange={e => {
                setSearching((isSearching = true));
                setSearchTerm(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Optional: Enter a two-letter country code after the city name to make the search more precise. For example, London, GB.">
                    <Search />
                  </Tooltip>
                </InputAdornment>
              }
              endAdornment={
                isSearching && (
                  <InputAdornment position="end">
                    <CircularProgress size={20} />
                  </InputAdornment>
                )
              }
            />
            {props.error && (
              <Typography className={classes.error}>{props.error}</Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <img src={logo} className={classes.appLogo} alt="logo" />
          <Grid justify="space-between" container></Grid>
          <TemporaryDrawer />
          <Button className="github-btn">
            <a
              href="https://github.com/denniskigen/react-weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <img src={about} className={classes.aboutImg} alt="about" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        <b>ReactWeather</b> is a labor of{" "}
        <span role="img" aria-label="love emoji" style={{ color: "red" }}>
          ♥️
        </span>{" "}
        project lovingly crafted by{" "}
        <a
          href="https://github.com/denniskigen"
          target="_blank"
          rel="noopener noreferrer"
        >
          @denniskigen
        </a>
        <p>
          It draws inspiration from {""}
          <a
            href="https://github.com/denniskigen/ng-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            ng-weather
          </a>
          , a similar projected written in Angular.
        </p>
        <p>
          Search functionality now works. What's next? Look away, TDD
          enthusiasts. Yep. I made the cardinal sin no dev worth their salt ever
          makes. I didn't write tests. Fear not, all that Jest goodness is
          coming very soon indeed.
        </p>
      </Typography>
      <Divider variant="middle" />
      <Typography className={classes.aboutText} component="div" gutterBottom>
        <h3>Credits</h3>
        <ul>
          <li>
            <a
              href="https://material-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material UI
            </a>
          </li>
          <li>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
          </li>
          <li>
            <a
              href="https://github.com/erikflowers/weather-icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Erik Flowers' weather icons
            </a>
          </li>
          <li>
            <img
              src={about}
              alt="small app icon for attribution"
              width="16px"
            />{" "}
            icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/good-ware"
              target="_blank"
              rel="noopener noreferrer"
            >
              Good ware
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              flaticon
            </a>
          </li>
        </ul>
      </Typography>
    </div>
  );

  return (
    <div>
      <Button className="about-btn" onClick={toggleDrawer("right", true)}>
        About
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
};

const AppLayout = props => {
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
};

const WeatherCardSubheader = props => {
  const date = dayjs().isValid(props.currentWeather.date)
    ? props.currentWeather.date
    : "";
  const description = props.currentWeather.description
    ? props.currentWeather.description
    : "";

  return (
    <>
      {dayjs(date).format("dddd")}, {dayjs(date).format("h:mm")}{" "}
      {dayjs(date).format("A")},{" "}
      {description.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      })}
    </>
  );
};

const Forecast = props => {
  const classes = useStyles();
  const prefix = "wi wi-";
  const result = props.forecast.map((item, index) => {
    const icon = prefix + weatherIcons.default[item.icon_id].icon;
    return (
      <ListItem key={index} className="forecastItem">
        <ListItemText
          className="week-day"
          primary={dayjs(item.dt_txt).format("dddd")}
          style={{ flex: "1 1 0%", textAlign: "left" }}
        ></ListItemText>
        <IconButton disabled={true} aria-label="forecast icon">
          <span
            className={`${classes.wi} ${icon}`}
            style={{ fontSize: "24px" }}
          ></span>
        </IconButton>
        <span className="temp" style={{ flex: "1 1 0%", textAlign: "right" }}>
          <Typography variant="body2" component="span" color="textPrimary">
            {Math.round(item.min)}&deg; /{" "}
          </Typography>
          <Typography variant="body2" component="span" color="textSecondary">
            {Math.round(item.max)}&deg;
          </Typography>
        </span>
      </ListItem>
    );
  });

  return (
    <List component="nav" aria-label="forecast data">
      {result}
    </List>
  );
};

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

class Weather extends React.Component {
  render() {
    const { city, currentWeather, forecast, setCity, error } = this.props;
    const prefix = "wi wi-";
    const icon =
      prefix + weatherIcons.default[this.props.currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[this.props.currentWeather.icon_id].recommendation;

    return (
      <div>
        <NavBar />
        <WeatherSearch city={city} setCity={setCity} error={error} />
        <AppLayout
          currentWeather={currentWeather}
          forecast={forecast}
          icon={icon}
          recommendation={recommendation}
        />
      </div>
    );
  }
}

export default Weather;
