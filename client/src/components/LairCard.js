import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Fade, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 400,
  },
  title: {
    fontFamily: 'Oxygen',
    fontWeight: "bold",
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Oxygen',
    fontSize: '1rem',
    color: '#fff',

  },
});

export default function LairCard({ lair, checked }) {
  const classes = useStyles();

  return (
    <div>
      <Fade in={checked} {...(checked ? { timeout: 500 } : {})}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={lair.imageUrl}
            title={lair.title}
          />
          <CardContent>
            <Typography
              gutterBottom variant="h5"
              component="h2"
              className={classes.title}
            >
              {lair.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              {lair.description}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </div>

  );
}