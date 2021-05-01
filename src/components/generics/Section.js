import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(5),
    // Horizontal separator line
    '&:not(:last-child):after': {
      content: '""',
      backgroundColor: GlobalStyles.primaryColor,
      width: '80px',
      height: '1px',
      marginTop: theme.spacing(10),
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    },
  },
  hidden: {
    textAlign: 'center',
    visibility: 'hidden',
    lineHeight: 0,
    margin: 0,
  },
  visible: {
    textAlign: 'center',
    margin: theme.spacing(5),
  },
}));

/*
 * Summary:
 * Props:
 *      heading: string
 *      hideHeading: bool = false
 *      description: string
 *      hideDescription: bool = false
 *      children
 */

export default React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Box className={classes.section} ref={ref}>
      <Box component='h2' className={props.hideHeading ? classes.hidden : classes.visible}>
        {props.heading}
      </Box>
      <Box component='p' className={props.hideDescription ? classes.hidden : classes.visible}>
        {props.description}
      </Box>
      {props.children}
    </Box>
  );
});
