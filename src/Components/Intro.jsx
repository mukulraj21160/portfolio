import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import backgroundimg from "../Assets/bkimg.png";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("xs")]: {
      backgroundImage: "url(" + backgroundimg + ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundImage: "url(" + backgroundimg + ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },

    [theme.breakpoints.up("md")]: {
      // backgroundImage: "url(" + backgroundimg + ")",
      // height: "100vh",
      // backgroundPosition: "center",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: "url(" + backgroundimg + ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  content: {
    [theme.breakpoints.up("xs")]: {
      paddingTop: "150px",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "150px",
      textAlign: "center",
    },

    [theme.breakpoints.up("md")]: {
      // paddingTop: "200px",
      // textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "200px",
      textAlign: "center",
    },
  },
  heading: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "26px",
      fontWeight: "300",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "26px",
      fontWeight: "300",
    },

    [theme.breakpoints.up("md")]: {
      // fontSize: "32px",
      // fontWeight: "700",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      fontWeight: "500",
    },
  },
  btn: {
    [theme.breakpoints.up("xs")]: {
      padding: "0px 0px 0px 0px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0px 0px 0px 0px",
    },

    [theme.breakpoints.up("md")]: {
      // padding: "0px 3px 0px 10px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 3px 0px 10px",
    },
  },
  btn_title: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "15px",
      padding: "5px 0px 5px 18px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "15px",
      padding: "5px 0px 5px 18px",
    },

    [theme.breakpoints.up("md")]: {
      // padding: "0px 3px 0px 10px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
      padding: "10px 0px 10px 10px",
    },
  },
}));

const intro = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div style={{ color: "white" }}>
          <Typography className={classes.heading}>
            Hello, I'm <span style={{ color: "red" }}>Mukul</span>
          </Typography>
          <Typography className={classes.heading}>
            I'm a full-stack Web Developer
          </Typography>
        </div>
        <br />
        <Button
          className={classes.btn}
          style={{ background: "linear-gradient(to right, #732fdf, #bd00ff" }}
          variant="contained"
        >
          <Typography className={classes.btn_title} style={{ color: "white" }}>
            get cv
          </Typography>
          <CloudDownloadIcon
            style={{
              color: "white",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default intro;
