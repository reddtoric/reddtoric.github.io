import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "2px 2px 3px #000000",
    color: "inherit",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(2),
    "&:last-child": {
      paddingBottom: theme.spacing(2),
    },
  },
}));

/*
  Summary: Returns Material UI Card w/Card Content using card background color.
  Props: 
    children
 */

export default (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Card className={`${classes.card} card-bg-color`}>
        <CardContent className={classes.cardContent}>
          {props.children}
        </CardContent>
      </Card>
    </Container>
  );
};
