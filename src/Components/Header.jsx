import React from "react";
import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#062845",
    },

    [theme.breakpoints.up("md")]: {
      // backgroundColor: "#062845",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#062845",
    },
  },
  nav: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },

    [theme.breakpoints.up("md")]: {
      // display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  item: {
    [theme.breakpoints.up("sm")]: {
      color: "white",
      marginLeft: "10px",
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        color: "red",
      },
    },

    [theme.breakpoints.up("md")]: {
      // color: "white",
      // marginLeft: "20px",
      // cursor: "pointer",
      // textDecoration: "none",
      // "&:hover": {
      //   color: "red",
      // },
    },
    [theme.breakpoints.up("lg")]: {
      color: "white",
      marginLeft: "20px",
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        color: "red",
      },
    },
  },
}));

const header = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <div className={classes.nav}>
        <p className={classes.item}>Home</p>

        <p className={classes.item}>About</p>

        <p className={classes.item}>Projects</p>

        <p className={classes.item}>Contact me</p>
      </div>
    </div>
  );
};

export default header;
