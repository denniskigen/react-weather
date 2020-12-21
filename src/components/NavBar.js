import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography
} from "@material-ui/core";

import about from "../about.png";
import { Logo } from "./Logo";

const useStyles = makeStyles(theme => ({
  root: {
    flexiGrow: 1,
    color: "black"
  },
  aboutImg: {
    padding: "30px 150px 0px 150px",
    width: "100px"
  },
  aboutText: {
    fontFamily: "Montserrat",
    padding: "30px"
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    position: "sticky"
  },
  list: {
    width: 400
  }
}));

const TemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
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
      <Button
        className="about-btn"
        onClick={toggleDrawer("right", true)}
        data-testid="toggle"
      >
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

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar variant="dense">
          <Logo />
          <div style={{ flex: "1 1 auto" }}></div>
          <TemporaryDrawer />
          <Button className="github-btn">
            <a
              href="https://github.com/denniskigen/react-weather"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
