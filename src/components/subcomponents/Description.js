import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  description: {
    margin: theme.spacing(2, 1),
    height: theme.spacing(12),
  },
}));

export default (props) => {
  const classes = useStyles();

  return <Box className={classes.description}>{props.children}</Box>;
};
