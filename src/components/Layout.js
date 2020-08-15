import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleDescriptionHidden: {
    textAlign: "center",
    visibility: "hidden",
    lineHeight: 0,
    margin: 0,
  },
  titleDescriptionVisible: {
    textAlign: "center",
    margin: theme.spacing(5),
  },
}));

export default React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Box pb={20} ref={ref}>
      <Box
        component="h2"
        className={
          props.hideTitle
            ? classes.titleDescriptionHidden
            : classes.titleDescriptionVisible
        }
      >
        {props.title}
      </Box>
      <Box
        component="p"
        className={
          props.hideDescription
            ? classes.titleDescriptionHidden
            : classes.titleDescriptionVisible
        }
      >
        {props.description}
      </Box>
      {props.children}
    </Box>
  );
});
