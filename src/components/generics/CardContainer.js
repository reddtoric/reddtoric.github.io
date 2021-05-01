import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';

export default CardContainer;

function CardContainer(props) {
  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap'>
      {props.children}
    </Box>
  );
}

CardContainer.propType = {
  children: PropTypes.oneOf([PropTypes.object, PropTypes.string]),
};
