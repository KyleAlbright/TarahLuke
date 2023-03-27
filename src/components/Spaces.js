import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';


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

const images = [  { src: 'https://blog-www.pods.com/wp-content/uploads/2021/06/resized_FI_Getty_organized-closet.jpg.webp', text: 'Closets' },  { src: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/3/26/1/Original_Brittney-Gazaway_HIWT500_Pantry-Organizer-Products_Beauty_V.jpg.rend.hgtvcom.616.924.suffix/1585249837770.jpeg', text: 'Pantries' },  { src: 'https://cdn.mos.cms.futurecdn.net/FPRrMFj9Y4oG7Aknv9C8jL-1600-80.jpg.webp', text: 'Bathrooms' },  { src: 'https://www.familyhandyman.com/wp-content/uploads/2017/09/FH13SEP_541_50_101.jpg?resize=1024,1024', text: 'Garages' },  { src: 'https://styledegree.sg/wp-content/uploads/2020/09/A-3-Step-Guide-To-Organizing-Styling-Your-Bookshelves-Feature-Image-%E2%80%93-StyleMag.jpg', text: 'Etc' },];


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
  
    return (
      <div id="spaces" className={classes.root} ref={ref}>
        <Grid container spacing={2} justify="center">
          {images.map((image, index) => (
            <Grid item key={index}>
              <motion.div
                className={classes.paper}
                initial={{ x: -1000 }}
                animate={isVisible ? { x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img className={classes.img} src={image.src} alt={`image-${index}`} />
              </motion.div>
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