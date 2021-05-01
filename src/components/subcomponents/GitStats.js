import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { mdiCircle, mdiSourceBranch, mdiStar } from '@mdi/js';
import Icon from '@mdi/react';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: GlobalStyles.primaryColor,
    marginRight: theme.spacing(1),
  },
  language: {
    fontSize: '0.9em',
    marginRight: theme.spacing(1),
  },
}));

export default GitStats;

function GitStats(project) {
  return (
    <Box>
      {project.language && <Stat icon={mdiCircle} size='0.6em' value={project.language} />}
      {project.stargazers_count > 0 && <Stat icon={mdiStar} value={project.stargazers_count} />}
      {project.forks_count > 0 && <Stat icon={mdiSourceBranch} value={project.forks_count} />}
    </Box>
  );
}

const Stat = (props) => {
  const classes = useStyles();

  return (
    <Box component='span' mr={3}>
      <Icon path={props.icon} size={props.size ? props.size : '1em'} className={classes.icon} />
      {props.value}
    </Box>
  );
};
