import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LairCard from './LairCard';
import lair from '../static/lair';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
    },
  },
}));
export default function LairSites() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="lair-to-visit">
      <LairCard lair={lair[0]} checked={checked}/>
      <LairCard lair={lair[1]} checked={checked}/>
    </div>
  );
}