import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import { useFooterStyles } from "./footerStyles";

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.root}>
      <span className={classes.topText}>Thanks for visiting and have a nice day</span>
      <div className={ classes.container }>
        <ul className={classes.col}>
          <li>Email</li>
          <li>Discord</li>
          <li>LinkedIn</li>
          <li>Twitch</li>
        </ul>
        <ul className={classes.col}>
          <li>@ali.umar.work@gmail.com</li>
          <li>@LordMushroom#6459</li>
          <li>@aliumartech</li>
          <li>@twitchprimebot23</li>
        </ul>
      </div>
      <span className={classes.botText}>Copyright 2021 @Ali Umar</span>
      <span className={classes.botText}>This website was built using React</span>
    </div>
  );
};
