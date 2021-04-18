import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
    },
  },
  btn_title: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
    },
  },
}));

const DownBtn = ({ text, icon, file }) => {
  const classes = style();
  return (
    <div className={classes.main}>
      <Button
        startIcon={icon}
        className={classes.btn}
        style={{ background: "linear-gradient(to right, #732fdf, #bd00ff" }}
        variant="contained"
      >
        <a
          href={file}
          target="_blank"
          rel="noreferrer"
          download
          className={classes.btn_title}
          style={{ color: "white", textDecoration: "none" }}
        >
          {text}
        </a>
      </Button>
    </div>
  );
};

export default DownBtn;
