import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import mukul from "../Assets/mukulspic.jpg";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const style = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    borderBottom: "0.5px solid #000000",
  },
  image: {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    [theme.breakpoints.up("md")]: {
      height: "200px",
      width: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "200px",
      width: "200px",
    },
  },
  progress_bar: {
    display: "flex",
    marginTop: "50px",
    marginBottom: "40px",
  },
  heading: {
    fontFamily: "Source Code Pro, monospace",
    fontSize: "26px",
    fontWeigth: "bold",
    marginBottom: "20px",
    borderBottom: "0.5px solid #000000",
    [theme.breakpoints.up("md")]: {
      fontSize: "42px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "42px",
    },
  },
  title: {
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: "22px",
    fontWeigth: "bold",
    paddingBottom: "20px",
    paddingTop: "10px",
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
    },
  },
  title1: {
    fontFamily: "Sacramento, cursive",
    fontSize: "23px",
    fontWeigth: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "32px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
    },
  },
  title2: {
    fontFamily: "Sacramento, cursive",
    fontSize: "13px",
    fontWeigth: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
    },
  },
}));

const About = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <Typography className={classes.heading}>About me</Typography>
      <img className={classes.image} src={mukul} alt="custom" />
      <Typography className={classes.title1}>
        Hii What's up? BTW I am
      </Typography>
      <br />
      <Typography
        className={classes.title2}
        style={{ padding: "0px 5px 0px 5px" }}
      >
        a full stack web developer from delhi. i have serious passion
        <br />
        for my work. i have to design web pages with creative UI effects,
        <br />
        animations, and dynamic user experiences.
      </Typography>
      <br />
      <Typography className={classes.title1} style={{ color: "#9d25fb" }}>
        Let's create something special
      </Typography>
      <br />
      <Grid container item className={classes.progress_bar}>
        <Grid item lg={4} md={4} xs={6}>
          <Progress type="circle" percent={100} />
          <Typography className={classes.title} style={{ color: "red" }}>
            HTML
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={6}>
          <Progress type="circle" percent={80} />
          <Typography className={classes.title} style={{ color: "blue" }}>
            CSS
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={6}>
          <Progress type="circle" percent={70} />
          <Typography className={classes.title} style={{ color: "orange" }}>
            JavaScript
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={6}>
          <Progress type="circle" percent={70} />
          <Typography className={classes.title} style={{ color: "navy" }}>
            ReactJS
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={6}>
          <Progress type="circle" percent={30} />
          <Typography className={classes.title} style={{ color: "Green" }}>
            NodeJS
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} xs={6}>
          <Progress type="circle" percent={85} />
          <Typography className={classes.title} style={{ color: "#ba246c" }}>
            MongoDB
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
