import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LairCard from './LairCard';
import lair from '../static/lair';

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
}));
export default function LairSites() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LairCard lair={lair[0]}/>
      <LairCard lair={lair[1]}/>

    </div>
  )
}