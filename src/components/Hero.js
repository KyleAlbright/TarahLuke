import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import heroImage1 from "../assets/closetPic1.jpg";
import heroImage2 from "../assets/kitchenPic1.jpg";
import heroImage3 from "../assets/bathroomPic1.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  slideContainer: {
    height: "calc(100vh - 64px)",
    [theme.breakpoints.up("md")]: {
      height: "85vh",
      position: "relative",
    },
    "& .slide-image": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "40%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(4),
    },
    fontFamily: "'M PLUS 1p', sans-serif",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    fontSize: "2rem",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Fade duration={2000} transitionDuration={1000} autoplay arrows={false} infinite={true}>
        <div className={`${classes.slideContainer} slide-container`}>
          <img src={heroImage1} alt="slide-1" className="slide-image" />
          <div className={classes.overlay}>
      <Box color="#fff" textAlign="center">
        <Typography variant="h3" component="h1" className={classes.title}>
          Tarah Luke
        </Typography>
      </Box>
    </div>
        </div>
        <div className={`${classes.slideContainer} slide-container`}>
          <img src={heroImage2} alt="slide-2" className="slide-image" />
          <div className={classes.overlay}>
      <Box color="#fff" textAlign="center">
        <Typography variant="h3" component="h1" className={classes.title}>
          Tarah Luke
        </Typography>
      </Box>
    </div>
        </div>
        <div className={`${classes.slideContainer} slide-container`}>
          <img src={heroImage3} alt="slide-3" className="slide-image" />
          <div className={classes.overlay}>
      <Box color="#fff" textAlign="center">
        <Typography variant="h3" component="h1" className={classes.title}>
          Tarah Luke
        </Typography>
      </Box>
    </div>
        </div>
      </Fade>
      <div className={classes.overlay}>
        <Box color="#fff" textAlign="center">
          <Typography variant="h3" component="h1" className={classes.title}>
            Tarah Luke
          </Typography>
        </Box>
      </div>
    </section>
  );
};

export default Hero;