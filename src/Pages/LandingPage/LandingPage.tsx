import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import MiniDrawr from "../../Components/MiniDrawer.tsx/MiniDrawr";
import { makeStyles } from "@material-ui/core/styles";
import { ParticlesBackground } from "../../Components/ParticlesBackground/ParticlesBackground";
import { useGlobalStyles } from "../../Styles/globalStyles";

export const LandingPage = () => {
  const globalClasses = useGlobalStyles();
  return <div className={globalClasses.root}>
      Landing Page
  </div>;
};
