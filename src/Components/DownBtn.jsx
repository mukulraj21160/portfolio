import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  main: {
    textAlign: "center",
  },
  btn_title: {
    fontSize: "12px",
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
