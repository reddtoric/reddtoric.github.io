import { makeStyles } from '@material-ui/core/styles';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  link: {
    color: GlobalStyles.primaryColor,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <a href={props.href} rel='noreferrer' target='_blank' className={classes.link}>
      {props.children}
    </a>
  );
};
