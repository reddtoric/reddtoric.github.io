import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CustomCard from 'components/generics/CustomCard';
import Description from 'components/subcomponents/Description';
import GitStats from 'components/subcomponents/GitStats';
import Links from 'components/subcomponents/Links';
import ProjectIcon from 'components/subcomponents/ProjectIcon';
import Title from 'components/subcomponents/Title';
import PropTypes from 'prop-types';
import React from 'react';

/*
  Summary: Return project card using Custom Card
  Props:
    project: {
      (optional) avatar: {
        (required) alt: 'alternative text for image',
        (required) src: 'path/to/image.png',
      }
      (required) title: 'title of project'
      (required) description: 'description of project',
      (optional) homepage: 'homepage href',
      (required, provide at least 1) links: {
        (optional) git: 'git link',
        (optional) playstore: 'playstore link',
        (optional) play: 'play game link',
        (optional) preview: 'preview link',
      },
    }
*/

const useStyles = makeStyles((theme) => ({
  iconAndTitle: {
    margin: theme.spacing(1, 1, 2, 1),
    height: theme.spacing(8),
    display: 'flex',
    flexDirection: 'row',
  },
  titleAndGitStats: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default ProjectCard;

function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <CustomCard>
      <Box className={classes.iconAndTitle}>
        <ProjectIcon {...project} />
        <Box className={classes.titleAndGitStats}>
          <Title {...project} />
          <GitStats {...project} />
        </Box>
      </Box>

      <Links {...project} />
      <Description>{project.description}</Description>
    </CustomCard>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  description: PropTypes.string,
};
