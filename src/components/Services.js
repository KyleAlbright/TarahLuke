import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Organize from "../assets/Organize.jpg";
import Unpacking from "../assets/Unpacking.jpg";
import Coaching from "../assets/Coaching.jpg"
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
    <Grid id="services-section" container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '65px' }}>
      <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.05, cursor: 'pointer' }}
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
              <img src={Unpacking} alt="Unpacking" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Typography variant="h5" component="h2" style={{ backfaceVisibility: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {isFlipped1 ? '' : `Unpacking`}
                </Typography>
                <Typography variant="body2" component="p" style={{ backfaceVisibility: 'hidden' }}>
                  {isFlipped1 ? 'I can help make your moving process easy and hassle-free. We can work together to manage any or all aspects of your move, from packing to unpacking and organizing your belongings in your new home.' : `"I cannot recommend Tarah highly enough. Her attention to detail and care for my belongings was impressive,and when it was time to unpack, she was just as careful and made sure everything was in its place before leaving. Tarah made a potentially stressful situation a breeze!"`}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Grid>

      <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.05, cursor: 'pointer' }}
          whileTap={{ scale: 0.95 }}
          style={{ margin: '0 10px' }}
          onClick={handleCardClick2}
        >
          <motion.div
            animate={{ rotateY: isFlipped2 ? 0 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '300px', height: '400px', borderRadius: '20px', backgroundColor: '#fff' }}
          >
            <Card style={{ height: '100%' }}>
              <CardContent>
              <img src={Coaching} alt="Coaching" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <Typography variant="h5" component="h2" style={{ backfaceVisibility: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {isFlipped2 ? '' : `Coaching`}
                </Typography>
                <Typography variant="body2" component="p" style={{ backfaceVisibility: 'hidden' }}>
                  {isFlipped2 ? `I'm here to help you create a space that feels calm, organized, and tailored to your unique needs. Whether you're looking to streamline your schedule, declutter your home, or simply improve your productivity, I can work with you to develop a personalized plan that sets you up for success. Let's work together to simplify your life and reduce your stress.` : `"Tarah truly helped me turn my life around! With her guidance, I was able to declutter my home, streamline my schedule, and develop routines that made my life so much easier. I feel like a weight has been lifted off my shoulders!"`}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Grid>

      <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <motion.div
          whileHover={{ scale: 1.05, cursor: 'pointer' }}
          whileTap={{ scale: 0.95 }}
          style={{ margin: '0 10px' }}
          onClick={handleCardClick3}        >

          <motion.div
            animate={{ rotateY: isFlipped3 ? 0 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '300px', height: '400px', borderRadius: '20px', backgroundColor: '#fff' }}
          >
            <Card style={{ height: '100%' }}>
              <CardContent>
                <img src={Organize} alt="Unpacking" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <Typography variant="h5" component="h2" style={{ backfaceVisibility: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {isFlipped3 ? '' : `Organizing`}
                </Typography>
                <Typography variant="body2" component="p" style={{ backfaceVisibility: 'hidden' }}>
                  {isFlipped3 ? ` I specialize in creating efficient and functional spaces that are tailored to your unique needs. From decluttering and streamlining to creating customized storage solutions, I can work with you to transform your space and make it work for you.` : `"Tarah helped me declutter my closet and the results were amazing! She was patient, understanding, and explained everything clearly. I would highly recommend her services to anyone looking to simplify their life."`}
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