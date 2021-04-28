import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import counter from "../Assets/counter.png";
import todo from "../Assets/todo.png";
import google from "../Assets/note.png";
import Login from "../Assets/login.png";
import Disney from "../Assets/Disney.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      borderBottom: "0.5px solid #000000;",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      borderBottom: "0.5px solid #000000;",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "50px",
      borderBottom: "0.5px solid #000000;",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "50px",
      borderBottom: "0.5px solid #000000;",
    },
  },
  heading: {
    [theme.breakpoints.up("xs")]: {
      fontFamily: "Source Code Pro, monospace",
      fontSize: "26px",
      fontWeigth: "bold",
      marginBottom: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Source Code Pro, monospace",
      fontSize: "26px",
      fontWeigth: "bold",
      marginBottom: "20px",
    },
    [theme.breakpoints.up("md")]: {
      fontFamily: "Source Code Pro, monospace",
      fontSize: "42px",
      fontWeigth: "bold",
      marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      fontFamily: "Source Code Pro, monospace",
      fontSize: "42px",
      fontWeigth: "bold",
      marginBottom: "50px",
    },
  },
  image: {
    [theme.breakpoints.up("xs")]: {
      marginBottom: "30px",
      height: "200px",
      width: "200px",
      cursor: "pointer",
      "&:hover": {
        //
      },
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "30px",
      height: "200px",
      width: "200px",
      cursor: "pointer",
      "&:hover": {
        //
      },
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "30px",
      height: "300px",
      width: "300px",
      cursor: "pointer",
      "&:hover": {
        //
      },
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "30px",
      height: "300px",
      width: "300px",
      cursor: "pointer",
      "&:hover": {
        //
      },
    },
  },
  main_grid: {
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
  media: {
    [theme.breakpoints.up("xs")]: {
      height: 200,
      width: 250,
    },
    [theme.breakpoints.up("sm")]: {
      height: 200,
      width: 250,
    },
    [theme.breakpoints.up("md")]: {
      height: 300,
      width: 300,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
      width: 300,
    },
  },
  card: {
    [theme.breakpoints.up("xs")]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "20px",
    },
  },
}));

const Projects = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <Typography className={classes.heading}>Projects</Typography>
      <Grid container item className={classes.main_grid}>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Disney}
                title="Disney+Clone"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Disney+ Clone
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://disney-clone-omega.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="small" color="primary">
                  Visit Site
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={google}
                title="Google Keep"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Google keep
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://google-keep-clone-mukul.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="small" color="primary">
                  Visit Site
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={counter}
                title="Counter Application"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Counter App
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://counter-react-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="small" color="primary">
                  Visit Site
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={todo}
                title="ToDo App"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Todo App
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://todo-list-react-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="small" color="primary">
                  Visit Site
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Login}
                title="Glassmorphism Login"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Glassmorphism
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://login-form-nine.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" size="small" color="primary">
                  Visit Site
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
