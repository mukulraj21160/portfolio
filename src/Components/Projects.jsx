import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import counter from "../Assets/counter.png";
import todo from "../Assets/todo.png";
import google from "../Assets/note.png";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "50px",
      borderBottom: "0.5px solid #000000;",
    },

    [theme.breakpoints.up("md")]: {
      // textAlign: "center",
      // marginTop: "20px",
      // marginBottom: "50px",
      // borderBottom: "0.5px solid #000000;",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "50px",
      borderBottom: "0.5px solid #000000;",
    },
  },
  heading: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "32px",
      fontWeigth: "bold",
      marginBottom: "50px",
    },

    [theme.breakpoints.up("md")]: {
      // fontSize: "36px",
      // fontWeigth: "bold",
      // marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "42px",
      fontWeigth: "bold",
      marginBottom: "50px",
    },
  },
  image: {
    [theme.breakpoints.up("sm")]: {
      height: "150px",
      width: "150px",
      cursor: "pointer",
      "&:hover": {
        //
      },
    },

    [theme.breakpoints.up("md")]: {
      // height: "300px",
      // width: "300px",
      // cursor: "pointer",
      // "&:hover": {
      //   //
      // },
    },
    [theme.breakpoints.up("lg")]: {
      height: "300px",
      width: "300px",
      cursor: "pointer",
      "&:hover": {
        //
      },
    },
  },
  main_grid: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      marginBottom: "50px",
    },

    [theme.breakpoints.up("md")]: {
      // textAlign: "center",
      // marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      marginBottom: "50px",
    },
  },
}));

const Projects = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <Typography className={classes.heading}>
        <u>Projects</u>
      </Typography>
      <Grid container item className={classes.main_grid}>
        <Grid item lg={4} md={4} sm={4}>
          <img className={classes.image} src={google} alt="custom" />
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <img className={classes.image} src={counter} alt="custom" />
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <img className={classes.image} src={todo} alt="custom" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
