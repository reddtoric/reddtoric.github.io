import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import { GlobalStyles } from 'GlobalStyles';
import PropTypes from 'prop-types';
import React from 'react';

/*
 *   Summary: Material UI outlined icon button group with tooltip.
 *   Props:
 *      buttons: [
 *          {
 *              tooltip: string,
 *              icon: material design icon,
 *              url: string,
 *          },
 *      ]
 */

const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: GlobalStyles.primaryColor,
  },
  icon: {
    color: GlobalStyles.primaryColor,
  },
}));

export default ButtonIconGroup;

function ButtonIconGroup({ buttons }) {
  const classes = useStyles();

  return (
    <ButtonGroup aria-label='outlined button group'>
      {buttons.map((button, index) => {
        if (button.url !== undefined) {
          return (
            <Tooltip key={index} title={button.tooltip} placement='top'>
              <Button className={classes.button} href={button.url} target='_blank' rel='noreferrer'>
                <Icon path={button.icon} className={classes.icon} size={1} />
              </Button>
            </Tooltip>
          );
        }

        return null;
      })}
    </ButtonGroup>
  );
}

ButtonIconGroup.propTypes = {
  buttons: PropTypes.array,
  url: PropTypes.string,
  tooltip: PropTypes.string,
  icon: PropTypes.symbol,
};
