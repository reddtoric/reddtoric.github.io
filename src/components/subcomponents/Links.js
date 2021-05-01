import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { mdiEye, mdiGamepadVariant, mdiGif, mdiGit, mdiGooglePlay } from '@mdi/js';
import ButtonIconGroup from 'components/generics/ButtonIconGroup';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  links: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default (project) => {
  const classes = useStyles();

  let isGif = false;
  if (project.preview !== undefined) {
    const length = project.preview.length;
    const substring = project.preview.substring(length - 3, length);
    isGif = substring == 'gif';
  }
  // console.log(isGif);

  const previewToolTip = isGif ? 'GIF' : 'Preview';
  const previewIcon = isGif ? mdiGif : mdiEye;

  const linksPattern = [
    {
      tooltip: 'Git',
      icon: mdiGit,
      url: project.html_url,
    },
    {
      tooltip: 'Google Play Store',
      icon: mdiGooglePlay,
      url: project.playstore,
    },
    {
      tooltip: 'Play Me',
      icon: mdiGamepadVariant,
      url: project.play,
    },
    {
      tooltip: previewToolTip,
      icon: previewIcon,
      url: project.preview,
    },
  ];

  return (
    <Box className={classes.links}>
      <ButtonIconGroup buttons={linksPattern} />
    </Box>
  );
};
