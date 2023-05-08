import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";


const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#888"
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {showFooter && (
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.grow} />
            <IconButton
              href="https://www.instagram.com/tarahluke/"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/tarahlukeorganizing/"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </React.Fragment>
  );
}
