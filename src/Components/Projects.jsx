import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import counter from "../Assets/counter.PNG";
import todo from "../Assets/todo.PNG";
import google from "../Assets/keep.PNG";
import Login from "../Assets/login.PNG";
import Disney from "../Assets/disney.PNG";
import crigroup from "../Assets/crigroup.PNG";
import hodlinfo from "../Assets/indexPage1.PNG";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const style = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
      marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "20px",
      marginBottom: "50px",
    },
  },
  heading: {
    fontFamily: "Source Code Pro, monospace",
    fontSize: "26px",
    fontWeigth: "bold",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      fontSize: "42px",
      marginBottom: "50px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "42px",
      marginBottom: "50px",
    },
  },
  image: {
    marginBottom: "30px",
    height: "200px",
    width: "200px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: "300px",
      width: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "300px",
      width: "300px",
    },
  },
  main_grid: {
    textAlign: "center",
  },
  media: {
    height: 200,
    width: 250,
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
    marginBottom: "20px",
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
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={hodlinfo}
                title="Hodlinfo Website"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Hodlinfo Website Clone
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://project-quadb.vercel.app/"
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
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={crigroup}
                title="Crigroup Website"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ overflowWrap: "break-word" }}
                >
                  Crigroup Website Clone
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://project-netart.netlify.app/"
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
