import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: 1000,
    margin: 'auto',
    marginTop: 20,
    cursor: 'pointer',
    height: 400,
  },
  media: {
    width: "40%",
    height: '100%',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const CardComponent = ({ title, description, images }) => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const handleImageClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <Card className={classes.root} onClick={handleImageClick}>
      <CardMedia className={classes.media} image={currentImage} title={title} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const cardsData = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: [
      'https://picsum.photos/300/400?random=1',
      'https://picsum.photos/300/400?random=2'
    ]
  },
  {
    title: 'Card 2',
    description: 'Sed et nisi malesuada, malesuada ex non, aliquam augue.',
    images: [
      'https://picsum.photos/300/400?random=4',
      'https://picsum.photos/300/400?random=5'
      
    ]
  },
  {
    title: 'Card 3',
    description: 'Nulla faucibus vitae mi in sollicitudin.',
    images: [
      'https://picsum.photos/300/400?random=7',
      'https://picsum.photos/300/400?random=8'
      
    ]
  },
];

const Cards = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {cardsData.map((cardData, index) => (
        <CardComponent key={index} {...cardData} />
      ))}
    </div>
  );
};

export default Cards;