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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    transition: "background-color 0.5s ease",
  },
  greyAppBar: {
    backgroundColor: "#888",
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
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${trigger ? classes.greyAppBar : ""
          }`}
      >
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Avatar>TL </Avatar>
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
                <Link
                  to="about"
                  className={`${classes.menuItem} ${classes.mobileMenuItem}`}
                  onClick={(event) => {
                    handleClick(event, "about-section");
                    handleMobileMenuClose();
                  }}
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <Link
                  to="spaces"
                  className={`${classes.menuItem} ${classes.mobileMenuItem}`}
                  onClick={(event) => {
                    handleClick(event, "spaces-section");
                    handleMobileMenuClose();
                  }}
                >
                  Spaces
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <Link
                  to="services"
                  className={`${classes.menuItem} ${classes.mobileMenuItem}`}
                  onClick={(event) => {
                    handleClick(event, "services-section");
                    handleMobileMenuClose();
                  }}
                >
                  Services
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMobileMenuClose}>
                <Link
                  to="contact"
                  className={`${classes.menuItem} ${classes.mobileMenuItem}`}
                  onClick={(event) => {
                    handleClick(event, "contact-section");
                    handleMobileMenuClose();
                  }}
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
          <div className={classes.menu}>
            <Hidden smDown>
              <Link
                to="/about"
                className={classes.menuItem}
                onClick={(event) => handleClick(event, "about-section")}
              >
                About
              </Link>
              <Link
                to="/spaces"
                className={classes.menuItem}
                onClick={(event) => handleClick(event, "spaces-section")}
              >
                Spaces
              </Link>
              <Link
                to="/services"
                className={classes.menuItem}
                onClick={(event) => handleClick(event, "services-section")}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={classes.menuItem}
                onClick={(event) => handleClick(event, "contact-section")}
              >
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