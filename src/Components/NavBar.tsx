import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const HEADING = "Ali Umar - Jr Developer";

interface NavBarProps {
    drawrStateSetter: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#4f3a4d",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props: NavBarProps) {
  const classes = useStyles();

  const handleMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.drawrStateSetter(true);
  }
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        classes={{
          colorPrimary: classes.root, // class name, e.g. `classes-nesting-root-x`
        }}
      >
        <Toolbar>
          <IconButton 
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {HEADING}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
