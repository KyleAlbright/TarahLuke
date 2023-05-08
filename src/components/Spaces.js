import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CircleCloset from "../assets/CircleCloset2.jpg"
import CirclePantry from "../assets/CirclePantry2.jpg"
import CircleBathroom from "../assets/CircleBathroom2.jpg"
import CircleBookcase from "../assets/CircleBookcase2.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  paper: {
    height: 200,
    width: 200,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    filter: 'grayscale(65%)',
    transition: 'filter 0.5s ease-in-out',
    '&:hover': {
      filter: 'grayscale(0%)',
      cursor: 'pointer',
    },
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  text: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
}));

const images = [  
 { src: CircleCloset, text: 'Closets' }, 
 { src: CirclePantry, text: 'Pantries' },
 { src: CircleBathroom, text: 'Bathrooms' },  
 { src: 'https://www.familyhandyman.com/wp-content/uploads/2017/09/FH13SEP_541_50_101.jpg?resize=1024,1024', text: 'Garages' },  
 { src: CircleBookcase, text: 'Etc' },];


 function Spaces() {
  const classes = useStyles();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const links = ['/closets', '/pantries', '/bathrooms', '/garages', '/etc'];

  return (
    <div id="spaces-section" className={classes.root} ref={ref}>
      <Grid container spacing={2} justify="center">
        {images.map((image, index) => (
          <Grid item key={index}>
            <Link to={links[index]}>
              <motion.div
                className={classes.paper}
                initial={{ x: -1000 }}
                animate={isVisible ? { x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img className={classes.img} src={image.src} alt={`image-${index}`} />
              </motion.div>
            </Link>
            <Typography variant="subtitle1" className={classes.text}>
              {image.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Spaces;