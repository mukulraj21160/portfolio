import React from "react";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const style = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      backgroundColor: "#000000",
    },
    [theme.breakpoints.up("md")]: {
      // textAlign: "center",
      // backgroundColor: "#000000",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      backgroundColor: "#000000",
    },
  },
  btn: {
    [theme.breakpoints.up("sm")]: {
      color: "red",
      fontSize: "28px",
    },
    [theme.breakpoints.up("md")]: {
      // color: "red",
      // fontSize: "36px",
    },
    [theme.breakpoints.up("lg")]: {
      color: "red",
      fontSize: "36px",
    },
  },
  heading: {
    [theme.breakpoints.up("sm")]: {
      color: "white",
      fontSize: "28px",
      padding: "10px 0px 20px 0px",
    },
    [theme.breakpoints.up("md")]: {
      // color: "white",
      // fontSize: "26px",
      // padding: "10px 0px 40px 0px",
    },
    [theme.breakpoints.up("lg")]: {
      color: "white",
      fontSize: "26px",
      padding: "10px 0px 20px 0px",
    },
  },
  detail: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1px",
    },
    [theme.breakpoints.up("md")]: {
      // paddingBottom: "1px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "1px",
    },
  },
}));

const Footer = () => {
  const classes = style();
  return (
    <div className={classes.main}>
      <Typography className={classes.heading}>Contact me :-</Typography>
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
      <div className={classes.detail}>
        <p style={{ color: "white" }}>
          Mukul Raj Makodia | Mob. 8448821160 | mukulraj21160@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
