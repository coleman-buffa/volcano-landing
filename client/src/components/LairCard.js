import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function LairCard({ lair }) {
  const classes = useStyles();

  return (
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
          className={classes.desc}>
          {lair.description}
          </Typography>
      </CardContent>

    </Card>
  );
}