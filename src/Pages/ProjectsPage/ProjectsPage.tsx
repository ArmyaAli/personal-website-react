import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import MiniDrawr from "../../Components/MiniDrawer.tsx/MiniDrawr";
import { ParticlesBackground } from "../../Components/ParticlesBackground/ParticlesBackground";
import { useGlobalStyles } from "../../Styles/globalStyles";

export const ProjectsPage = () => {
  const globalClasses = useGlobalStyles();
  return (
    <div className={globalClasses.root}>
        Projects Page
    </div>
  );
};
