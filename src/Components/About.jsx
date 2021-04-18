import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import mukul from "../Assets/mukulspic.jpg";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      borderBottom: "0.5px solid #000000;",
    },

    [theme.breakpoints.up("md")]: {
      // textAlign: "center",
      // marginTop: "30px",
      // borderBottom: "0.5px solid #000000;",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      borderBottom: "0.5px solid #000000;",
    },
  },
  image: {
    [theme.breakpoints.up("sm")]: {
      height: "150px",
      width: "150px",
      borderRadius: "50%",
    },

    [theme.breakpoints.up("md")]: {
      // height: "200px",
      // width: "200px",
      // borderRadius: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "200px",
      width: "200px",
      borderRadius: "50%",
    },
  },
  progress_bar: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginTop: "50px",
      marginBottom: "40px",
    },

    [theme.breakpoints.up("md")]: {
      // display: "flex",
      // marginTop: "50px",
      // marginBottom: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      marginTop: "50px",
      marginBottom: "40px",
    },
  },
  heading: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "32px",
      fontWeigth: "bold",
      marginBottom: "20px",
      borderBottom: "0.5px solid #000000;",
    },

    [theme.breakpoints.up("md")]: {
      // fontSize: "42px",
      // fontWeigth: "bold",
      // marginBottom: "20px",
      // borderBottom: "0.5px solid #000000;",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "42px",
      fontWeigth: "bold",
      marginBottom: "20px",
      borderBottom: "0.5px solid #000000;",
    },
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "22px",
      fontWeigth: "bold",
    },

    [theme.breakpoints.up("md")]: {
      // fontSize: "32px",
      // fontWeigth: "bold",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32px",
      fontWeigth: "bold",
    },
  },
}));

const About = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <Typography className={classes.heading}>About me</Typography>
      <img className={classes.image} src={mukul} alt="custom" />
      <h2>Hii...What's up??...BTW I am...</h2>
      <h5>
        ..a full stack web developer from delhi. i have serious passion
        <br />
        for my work. i have to design web pages with creative UI effects,
        <br />
        animations, and dynamic user experiences.
      </h5>
      <h2 style={{ color: "#9d25fb", fontSize: "32px" }}>
        Let's create something special
      </h2>
      <br />
      <Grid container item className={classes.progress_bar}>
        <Grid item lg={4} md={4} sm={4}>
          <Progress type="circle" percent={100} />
          <Typography className={classes.title} style={{ color: "red" }}>
            HTML
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <Progress type="circle" percent={80} />
          <Typography className={classes.title} style={{ color: "blue" }}>
            CSS
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <Progress type="circle" percent={70} />
          <Typography className={classes.title} style={{ color: "orange" }}>
            JavaScript
          </Typography>
        </Grid>
        <Grid container item className={classes.progress_bar}>
          <Grid item lg={4} md={4} sm={4}>
            <Progress type="circle" percent={70} />
            <Typography className={classes.title} style={{ color: "navy" }}>
              ReactJS
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4}>
            <Progress type="circle" percent={30} />
            <Typography className={classes.title} style={{ color: "Green" }}>
              NodeJS
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={4}>
            <Progress type="circle" percent={85} />
            <Typography className={classes.title} style={{ color: "#ba246c" }}>
              MongoDB
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
