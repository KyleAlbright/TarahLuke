import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import TarahImage from '../assets/tarahPic4.jpg';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  about: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  leftSide: {
    paddingRight: theme.spacing(5),
  },
  tarahImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  card: {
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3),
    boxSizing: 'border-box',
    height: '60%',
    backgroundColor: '#fff',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    textAlign: 'center',
  },
  icon: {
    cursor: 'pointer',
    position: 'absolute',
    top: 'calc(50% - 12px)',
  },
}));
const About = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);

  const cards = [
    {
      id: 1,
      content: `My motto is "I meet you where you are at," which means that I understand that everyone's organizational journey is different. Whether you're feeling overwhelmed by clutter, struggling to balance work and life, or just need a little help creating a more organized home, I'm here to support you every step of the way. I believe that everyone deserves to live in a home that feels calm, organized, and tailored to their unique needs. With my expertise and non-judgmental approach, I work with my clients to develop personalized solutions that make their lives easier and more streamlined.`,
    },
    {
      id: 2,
      content: `But I'm not just here to help you physically organize your space. As a coach, I can also work with you to develop personalized strategies that help you better manage your time, reduce your stress, and live a more fulfilling life. Whether you're just starting out and feeling overwhelmed, or you're looking for more advanced strategies to take your organization to the next level, I'm here to support you every step of the way. I'm passionate about helping people simplify their lives, reduce their stress, and create more space for the things that truly matter.`,
    },
    {
      id: 3,
      content: `Originally from Seattle, I've always been passionate about creating order and finding ways to simplify my own life. After moving to Austin and discovering my love for helping others with their organizational needs, I decided to turn my passion into a career as a professional organizer. If you're ready to take the first step towards a more organized life, I would love to chat with you about how I can help. Let's work together to create a space that sparks joy and reduces your stress.`,
    },
  ];

  const handlePrevClick = () => {
    if (current === 0) {
      setCurrent(cards.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const handleNextClick = () => {
    if (current === cards.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <Grid id="about-section" container className={classes.about}>
      <Grid item xs={12} md={6} className={classes.leftSide}>
        <Box display="flex" justifyContent="center">
          <Box className={classes.portfolioImage}>
            <img className={classes.tarahImage} src={TarahImage} alt="tarah_image" />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        
        <Box display="flex" flexDirection="column">
          <Box mb={2}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="body1">{cards[current].content}</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <IconButton onClick={handlePrevClick}><KeyboardArrowLeft /></IconButton>
            </Box>
            <Box>
              <IconButton onClick={handleNextClick}><KeyboardArrowRight /></IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;