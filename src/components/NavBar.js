import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Hidden,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../assets/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "background-color 0.5s ease",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mobileMenuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menu: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  mobileMenuItem: {
    color: "red",
  },
  menuItem: {
    textDecoration: "none",
    color: "#fff",
    margin: theme.spacing(1),
    "&:hover": {
      color: "#888",
    },
  },
}));

const Navbar = () => {
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Avatar alt="Tarah Luke Logo" src={Logo} />
          </Link>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.mobileMenuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={mobileAnchorEl}
              keepMounted
              open={Boolean(mobileAnchorEl)}
              onClose={handleMobileMenuClose}
            >
              <MenuItem onClick={handleMobileMenuClose}>
                <Link to="/about" className={`${classes.menuItem} ${classes.mobileMenuItem}`}>
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <Link to="/projects" className={`${classes.menuItem} ${classes.mobileMenuItem}`}>
                  Projects
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <Link to="/services" className={`${classes.menuItem} ${classes.mobileMenuItem}`}>
                  Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <Link to="/contact" className={`${classes.menuItem} ${classes.mobileMenuItem}`}>
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
          <div className={classes.menu}>
            <Hidden smDown>
              <Link to="/about" className={classes.menuItem}>
                About
              </Link>
              <Link to="/projects" className={classes.menuItem}>
                Projects
              </Link>
              <Link to="/services" className={classes.menuItem}>
                Services
              </Link>
              <Link to="/contact" className={classes.menuItem}>
                Contact
              </Link>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;