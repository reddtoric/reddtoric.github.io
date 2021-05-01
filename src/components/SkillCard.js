import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import CustomCard from 'components/generics/CustomCard';
import { GlobalStyles } from 'GlobalStyles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  skillCard: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    color: GlobalStyles.primaryColor,
  },
  skill: {
    fontFamily: GlobalStyles.monoFont,
    marginLeft: theme.spacing(1),
  },
}));

/*
 * Summary: Skill Card
 * Props:
 *      skill: {
 *          icon: material design icon,
 *          name: string
 *      }
 */

export default SkillCard;

function SkillCard({ skill }) {
  const classes = useStyles();

  return (
    <CustomCard>
      <Box className={classes.skillCard}>
        <Icon className={classes.icon} path={skill.icon} size={1} />

        <Typography variant='body1' component='h3' className={classes.skill}>
          {skill.name}
        </Typography>
      </Box>
    </CustomCard>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.object,
  icon: PropTypes.symbol,
  name: PropTypes.string,
};
