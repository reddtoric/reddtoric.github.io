import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '2px 2px 3px #000000',
    color: 'inherit',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: GlobalStyles.cardBgColor,
  },
  cardContent: {
    padding: theme.spacing(2),
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth='xs'>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>{props.children}</CardContent>
      </Card>
    </Container>
  );
};
