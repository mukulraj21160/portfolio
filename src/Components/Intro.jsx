import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import backgroundimg from "../Assets/bkimg.png";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Resume from "../Assets/docs/_Mukul's_CV.pdf";
import DownBtn from "./DownBtn";

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
      backgroundImage: "url(" + backgroundimg + ")",
      height: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
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
      paddingTop: "230px",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "165px",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "200px",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "200px",
      textAlign: "center",
    },
  },
  heading: {
    [theme.breakpoints.up("xs")]: {
      fontFamily: "Parisienne, cursive",
      fontSize: "26px",
      fontWeight: "350",
    },
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Parisienne, cursive",
      fontSize: "30px",
      fontWeight: "350",
    },
    [theme.breakpoints.up("md")]: {
      fontFamily: "Parisienne, cursive",
      fontSize: "32px",
      fontWeight: "500",
    },
    [theme.breakpoints.up("lg")]: {
      fontFamily: "Parisienne, cursive",
      fontSize: "32px",
      fontWeight: "500",
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
            Hello, I'm <span style={{ color: "#39FF14" }}>Mukul</span>
          </Typography>
          <Typography className={classes.heading}>
            I'm a full-stack Web Developer
          </Typography>
        </div>
        <br />
        <DownBtn
          text="GET CV"
          file={Resume}
          icon={
            <CloudDownloadIcon
              style={{
                color: "white",
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default intro;
