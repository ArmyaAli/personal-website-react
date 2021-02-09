import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import MiniDrawr from "../Components/MiniDrawer.tsx/MiniDrawr";
import { ParticlesBackground } from "../Components/ParticlesBackground/ParticlesBackground";
import { useGlobalStyles } from "../Styles/globalStyles";

export const SkillsPage = () => {
  const globalClasses = useGlobalStyles();
  return <div className={globalClasses.root}>Skills Page</div>;
};
