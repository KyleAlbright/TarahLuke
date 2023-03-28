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
      content: "Seitan echo park master cleanse letterpress same tattooed. Tilde aesthetic tofu, you probably haven't heard of them church-key listicle gatekeep activated charcoal selfies tonx. Iceland scenester pitchfork shabby chic migas, gatekeep 3 wolf moon meditation roof party bitters XOXO. Listicle shabby chic jean shorts grailed marxism, activated charcoal swag flexitarian lyft palo santo vibecession gorpcore schlitz. Church-key four loko waistcoat you probably haven't heard of them dreamcatcher street art. ",
    },
    {
      id: 2,
      content: "I'm baby tousled polaroid you probably haven't heard of them, snackwave truffaut enamel pin trust fund jean shorts subway tile offal fam pork belly kitsch. Neutral milk hotel iPhone small batch live-edge affogato listicle, selfies you probably haven't heard of them tousled vexillologist. XOXO poutine jawn, cronut gochujang ascot shoreditch. Synth leggings try-hard 8-bit crucifix trust fund pok pok gatekeep taxidermy. Waistcoat edison bulb photo booth meh.",
    },
    {
      id: 3,
      content: "Aesthetic vice before they sold out cupping, banjo mixtape chambray skateboard put a bird on it offal messenger bag XOXO paleo cardigan. Typewriter activated charcoal street art deep v. Lomo pitchfork artisan next level, truffaut gatekeep keytar. Gluten-free cupping lumbersexual wayfarers PBR&B gentrify vape.",
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