
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
           
        </IconButton>
          <Link to="/">
        <Typography variant="h6" className={classes.title}>
          Movie Tracker
        </Typography>
        </Link>
        <Link to={"/login"}>
        <Button color="inherit" onClick={handleOpen}>
          Log In
        </Button>
        </Link>
        <Link to={"/signup"}>
        <Button color="inherit" onClick={handleOpen}>
          Signup
        </Button>
        </Link>

      </Toolbar>
      
    </AppBar>
  );
};
