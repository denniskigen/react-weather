import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import dayjs from "dayjs";
import * as weatherIcons from "../icons";

const useStyles = makeStyles(theme => ({
  wi: {
    color: "#673ab7"
  }
}));

export default function Forecast(props) {
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
}
