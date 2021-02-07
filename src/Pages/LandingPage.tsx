import React, { CSSProperties } from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import MiniDrawr from "../Components/MiniDrawer.tsx/MiniDrawr";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-tsparticles";
import { ParticlesBackground } from "../Components/ParticlesBackground/ParticlesBackground";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "blue",
  },
}));

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <ParticlesBackground />
      <MiniDrawr />
      
      
      <Footer />
    </div>
  );
};
