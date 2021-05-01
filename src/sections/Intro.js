import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import CustomButton from 'components/generics/CustomButton';
import Section from 'components/generics/Section';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  flexVertical: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  nameTitle: {
    fontSize: '3rem',
    alignItems: 'center',
    display: 'flex',
    flex: 5,
  },
  separator: {
    margin: theme.spacing('auto', 2),
    color: GlobalStyles.primaryColor,
  },
  nav: {
    display: 'flex',
    margin: theme.spacing(2),
    fontFamily: GlobalStyles.monoFont,
    color: GlobalStyles.primaryColor,
  },
  proceedButton: {
    margin: theme.spacing(8),
  },
  circleButton: {
    borderRadius: '50%',
  },
}));

export default React.forwardRef(Intro);

function Intro({ sections }, ref) {
  const classes = useStyles();

  return (
    <Section heading='Intro' hideHeading description='' hideDescription ref={ref}>
      <Box className={classes.flexVertical}>
        <NameTitle>Edward Hughes</NameTitle>
        <Nav sections={sections} />
        <ProceedButton onClick={sections[0].handleOnClick} />
      </Box>
    </Section>
  );
}

function NameTitle(props) {
  const classes = useStyles();

  return (
    <Box component='h1' className={classes.nameTitle}>
      {props.children}
    </Box>
  );
}

function Separator() {
  const classes = useStyles();

  return <Box className={classes.separator}>|</Box>;
}

function NavButton(props) {
  return <CustomButton onClick={props.onClick}>{props.title}</CustomButton>;
}

function Nav(props) {
  const classes = useStyles();

  return (
    <Box className={classes.nav}>
      {props.sections.map((section, index) => {
        if (index < props.sections.length - 1) {
          return (
            <React.Fragment key={index}>
              <NavButton onClick={section.handleOnClick} title={section.title} />
              <Separator />
            </React.Fragment>
          );
        } else {
          return <NavButton key={index} onClick={section.handleOnClick} title={section.title} />;
        }
      })}
    </Box>
  );
}

function ProceedButton(props) {
  const classes = useStyles();

  return (
    <Box className={classes.proceedButton}>
      <Button className={`${classes.circleButton}`} onClick={props.onClick}>
        <Icon color='white' path={mdiChevronDown} size={3} />
      </Button>
    </Box>
  );
}
