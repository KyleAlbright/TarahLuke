import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Services = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleCardClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleCardClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleCardClick3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '65px' }}>
    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ margin: '0 10px' }}
        onClick={handleCardClick1}
      >
        <motion.div
          animate={{ rotateY: isFlipped1 ? 0 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '300px', height: '400px', borderRadius: '20px', backgroundColor: '#fff' }}
        >
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ backfaceVisibility: 'hidden' }}>
                {isFlipped1 ? '' : 'Unpacking'}
              </Typography>
              <Typography variant="body2" component="p" style={{ backfaceVisibility: 'hidden' }}>
                {isFlipped1 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' : 'Click the card to flip!'}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Grid>

    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ margin: '40px 10px' }}
        onClick={handleCardClick2}
      >
        <motion.div
          animate={{ rotateY: isFlipped1 ? 0 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '300px', height: '400px', borderRadius: '20px', backgroundColor: '#fff' }}
        >
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ backfaceVisibility: 'hidden' }}>
                {isFlipped2 ? '' : 'Coaching'}
              </Typography>
              <Typography variant="body2" component="p" style={{ backfaceVisibility: 'hidden' }}>
                {isFlipped2 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' : 'Click the card to flip!'}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Grid>

    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ margin: '0 10px' }}
        onClick={handleCardClick3}
      >
        <motion.div
          animate={{ rotateY: isFlipped3 ? 0 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '300px', height: '400px', borderRadius: '20px', backgroundColor: '#fff' }}
        >
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" style={{ backfaceVisibility: 'hidden' }}>
                {isFlipped3 ? '' : 'Organizing'}
              </Typography>
              <Typography variant="body2" component="p" style={{ backfaceVisibility: 'hidden' }}>
                {isFlipped3 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' : 'Click the card to flip!'}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Grid>

    </Grid>
  );
};

export default Services;