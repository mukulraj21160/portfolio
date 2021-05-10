import React from "react";
import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const style = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    backgroundColor: "#000000",
  },
  btn: {
    color: "red",
    fontSize: "25px",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "40px",
    },
  },
  heading: {
    fontFamily: "Marck Script, cursive",
    color: "white",
    fontSize: "18px",
    padding: "10px 0px 20px 0px",
    [theme.breakpoints.up("md")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "28px",
    },
  },
  detail: {
    fontFamily: "Marck Script, cursive",
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
    },
  },
  copyright: {
    borderTop: "0.5px solid cyan",
  },
}));

const Footer = () => {
  const year = new Date().getFullYear();
  const classes = style();
  return (
    <div className={classes.main}>
      <Grid container item className={classes.copyright}>
        <Grid item lg={4} md={2}></Grid>
        <Grid item lg={4} md={8} xs={12}>
          <Typography className={classes.heading}>Contact me :-</Typography>
        </Grid>
        <Grid item lg={4} md={2}></Grid>
        <Grid item lg={4} md={2}></Grid>
        <Grid item lg={4} md={8} xs={12}>
          <IconButton>
            <a
              href="https://www.facebook.com/mukulraj21160"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FacebookIcon className={classes.btn} />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://api.whatsapp.com/send?phone=+918448821160"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <WhatsAppIcon className={classes.btn} />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://github.com/mukulraj21160"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <GitHubIcon className={classes.btn} />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.instagram.com/mukul.raj.11/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <InstagramIcon className={classes.btn} />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/mukul-raj-makodia-645449208/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LinkedInIcon className={classes.btn} />
            </a>
          </IconButton>
        </Grid>
        <Grid item lg={4} md={2}></Grid>
        <Grid item lg={3} md={1}></Grid>
        <Grid item lg={6} md={10} xs={12}>
          <div className={classes.detail}>
            <p style={{ color: "white" }}>
              Mukul Raj Makodia | Mob. 8448821160 | mukulraj21160@gmail.com
              <br />
              Copyright © {year}
            </p>
          </div>
        </Grid>
        <Grid item lg={3} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
