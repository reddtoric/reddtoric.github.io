import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: 4,
    marginRight: theme.spacing(3),
  },
}));

export default (project) => {
  const classes = useStyles();

  if (project.icon_url) {
    return <Avatar alt='project icon' src={project.icon_url} className={classes.icon} />;
  } else {
    return <Box component='img' alt='placeholder image' src='https://via.placeholder.com/60' className={classes.icon} />;
  }
};
