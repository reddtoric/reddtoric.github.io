import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

/*
  Summary: Return Material UI primary colored text variant button.
  props:
    children,
    disabled: (optional) bool,
    className: (optional) 'additional classname',
    href: (optional) 'button href',
    onClick: (optional) function,
    target: (optional) '_blank'
*/
const useStyles = makeStyles((theme) => ({
  button: {
    color: GlobalStyles.primaryColor,
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Button
      disabled={props.disabled}
      variant='text'
      className={classes.button}
      href={props.href}
      onClick={props.onClick}
      target={props.target}
      rel={props.target ? 'noreferrer' : ''}
    >
      {props.children}
    </Button>
  );
};
