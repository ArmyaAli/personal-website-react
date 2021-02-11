import { useGlobalStyles } from "../../Styles/globalStyles";
import { Who, What, Why } from "../../Components/AboutMe/Cards";
import { useAboutMeStyles } from "./aboutmeStyles";
export const AboutMePage = () => {
  const globalClasses = useGlobalStyles();
  const classes = useAboutMeStyles();
  return (
    <div className={globalClasses.root}>
      <div className={classes.innerContainer}>
        <Who />
        <What />
        <Why />
      </div>
    </div>
  );
};
