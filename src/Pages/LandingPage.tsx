import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import NavBar from "../Components/NavBar";

export const LandingPage = () => {
  const [drawerState, setdrawerState] = React.useState<boolean>(false);

  const toggleDrawer = ($event: React.SyntheticEvent<{}, Event>) => {
    setdrawerState(false);
  };

  return (
    <div>
      <NavBar drawrStateSetter={setdrawerState} />
      <SwipeableDrawer
        style={{ width: "25%" }}
        anchor={"left"}
        open={drawerState}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
          
      </SwipeableDrawer>
    </div>
  );
};
