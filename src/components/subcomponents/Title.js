import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: 700,
    fontFamily: 'inherit',
  },
}));

export default (project) => {
  const classes = useStyles();

  return (
    <Typography variant='body1' component='h3' className={classes.title}>
      {project.title !== undefined ? project.title : project.name}
    </Typography>
  );
};
