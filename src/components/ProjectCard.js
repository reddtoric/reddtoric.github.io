import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  mdiGit,
  mdiGooglePlay,
  mdiGamepadVariant,
  mdiStar,
  mdiSourceBranch,
  mdiEye,
} from "@mdi/js";
import ButtonIconGroup from "components/ButtonIconGroup";
import CustomButton from "components/CustomButton";
import CustomCard from "components/CustomCard";

const useStyles = makeStyles((theme) => ({
  titleRowLayout: {
    margin: theme.spacing(1, 1, 2, 1),
    height: theme.spacing(8),
    display: "flex",
    flexDirection: "row",
  },
  linksRowLayout: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  descriptionRowLayout: {
    margin: theme.spacing(2, 1),
    height: theme.spacing(12),
  },
  readMoreRowLayout: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: 4,
    marginRight: theme.spacing(3),
  },
  titleAndGitInfoLayout: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: theme.spacing(1),
    fontWeight: 700,
    fontFamily: "inherit",
  },
  gitInfo: {},
}));

/*
  Summary: Return project card using Custom Card
  Props:
    project: {
      (optional) avatar: {
        (required) alt: "alternative text for image",
        (required) src: "path/to/image.png",
      }
      (required) title: "title of project"
      (required) description: "description of project",
      (optional) homepage: "homepage href",
      (required, provide at least 1) links: {
        (optional) git: "git link",
        (optional) playstore: "playstore link",
        (optional) play: "play game link",
        (optional) preview: "preview link",
      },
    }
*/

export default function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <CustomCard>
      <TitleRow project={project} />
      <LinksRow links={project.links} />

      <Box className={classes.descriptionRowLayout}>{project.description}</Box>

      <ReadMoreRow project={project} />
    </CustomCard>
  );
}

function TitleAndGitInfo({ project }) {
  const classes = useStyles();

  return (
    <Box className={classes.titleAndGitInfoLayout}>
      <Typography variant="body1" component="h3" className={classes.title}>
        {project.title}
      </Typography>
      {/*
      <Box>
        C# <Icon path={mdiStar} size="1em" className="primary-color" /> 5
        <Icon path={mdiSourceBranch} size="1em" className="primary-color" /> 1
      </Box>
      */}
    </Box>
  );
}

function TitleRow({ project }) {
  const classes = useStyles();

  if (project.avatar !== undefined) {
    return (
      <Box className={classes.titleRowLayout}>
        <Avatar
          alt={project.avatar.alt}
          src={project.avatar.src}
          className={classes.icon}
        />

        <TitleAndGitInfo project={project} />
      </Box>
    );
  } else {
    return (
      <Box className={classes.titleRowLayout}>
        <TitleAndGitInfo project={project} />
      </Box>
    );
  }
}

function LinksRow(props) {
  const classes = useStyles();

  const links = [
    {
      tooltip: "Git",
      icon: mdiGit,
      href: props.links.git,
    },
    {
      tooltip: "Google Play Store",
      icon: mdiGooglePlay,
      href: props.links.playstore,
    },
    {
      tooltip: "Play",
      icon: mdiGamepadVariant,
      href: props.links.play,
    },
    {
      tooltip: "Preview",
      icon: mdiEye,
      href: props.links.preview,
    },
  ];

  return (
    <Box className={classes.linksRowLayout}>
      <ButtonIconGroup buttons={links} />
    </Box>
  );
}

function ReadMoreRow({ project }) {
  const classes = useStyles();

  return (
    <Box className={classes.readMoreRowLayout}>
      {project.homepage !== undefined ? (
        <CustomButton href={project.homepage}>Read more...</CustomButton>
      ) : (
        <CustomButton disabled>Read more...</CustomButton>
      )}
    </Box>
  );
}
