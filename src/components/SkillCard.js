import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import CustomCard from "components/CustomCard";

const useStyles = makeStyles((theme) => ({
  skillCardLayout: {
    display: "flex",
    flexDirection: "row",
  },
  skill: {
    marginLeft: theme.spacing(1),
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <CustomCard>
      <Box className={classes.skillCardLayout}>
        <Icon path={props.skill.icon} className="primary-color" size={1} />

        <Typography
          variant="body1"
          component="h3"
          className={`${classes.skill} mono-font`}
        >
          {props.skill.skill}
        </Typography>
      </Box>
    </CustomCard>
  );
};
