import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import about from "./about.png";
import logo from "./logo.svg";
import dayjs from "dayjs";
import * as weatherIcons from "./icons";
import * as recommendations from "./recommendations";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black"
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
    marginTop: "100px"
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
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <img src={logo} className={classes.appLogo} alt="logo" />
          <Grid justify="space-between" container></Grid>
          <TemporaryDrawer />
          <Button>
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
      <Typography className={classes.aboutText} variant="body1" gutterBottom>
        <b>ReactWeather</b> is a labor of{" "}
        <span role="img" aria-label="love emoji" style={{ color: "red" }}>
          ♥️
        </span>
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
          Functionality is pretty barebones at this point but I'll be adding the
          ability to search for different locations pretty soon. Tests too -
          can't wait to get stuck in to Jest.
        </p>
      </Typography>
      <Divider variant="middle" />
      <Typography className={classes.aboutText} variant="body1" gutterBottom>
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

  // - [Angular Material](https://material.angular.io)
  // - [Angular Flex Layout](https://github.com/angular/flex-layout)
  // - [Erik Flowers' weather icons](https://github.com/erikflowers/weather-icons)
  // - [OpenWeatherMap API](https://openweathermap.org/api)

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>About</Button>
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
      {dayjs(date).format("dddd")}, {dayjs(date).format("h:m")}{" "}
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
      <ListItem key={index} button>
        <ListItemText
          primary={dayjs(item.dt_txt).format("dddd")}
          style={{ flex: "1 1 0%", textAlign: "left" }}
        ></ListItemText>
        <IconButton edge="start" aria-label="forecast icon">
          <span
            className={`${classes.wi} ${icon}`}
            style={{ fontSize: "24px" }}
          ></span>
        </IconButton>
        <span style={{ flex: "1 1 0%", textAlign: "right" }}>
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
          image={props.icon}
          style={{ fontSize: "128px", float: "right" }}
        />
        <Typography
          variant="h2"
          color="textPrimary"
          component="h2"
          style={{ fontFamily: "Montserrat", paddingTop: "30px" }}
        >
          {Math.round(props.currentWeather.temperature)}&deg;C
        </Typography>
        <Typography
          variant="subtitle2"
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
          className={classes.recommendation}
          color="textPrimary"
          gutterBottom
        >
          {props.recommendation}.
        </Typography>
        <Divider variant="middle" />
        <Forecast forecast={props.forecast} />
      </CardContent>
    </Card>
  );
};

class Weather extends React.Component {
  render() {
    const { currentWeather, forecast } = this.props;
    const prefix = "wi wi-";
    const icon =
      prefix + weatherIcons.default[this.props.currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[this.props.currentWeather.icon_id].recommendation;

    return (
      <div>
        <NavBar />
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
