import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import CustomButton from "components/CustomButton";
import Layout from "components/Layout";

const useStyles = makeStyles((theme) => ({
  flexVertical: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  nameTitle: {
    fontSize: "3rem",
    alignItems: "center",
    display: "flex",
    flex: 5,
  },
  nav: {
    display: "flex",
    margin: theme.spacing(2),
  },
  separator: {
    margin: theme.spacing("auto", 2),
  },
  proceedButton: {
    margin: theme.spacing(8),
  },
  circleButton: {
    borderRadius: "50%",
  },
}));

function NameTitle(props) {
  const classes = useStyles();

  return (
    <Box component="h1" className={classes.nameTitle}>
      {props.children}
    </Box>
  );
}

function Separator() {
  const classes = useStyles();

  return <Box className={`${classes.separator} primary-color`}>|</Box>;
}

function NavButton(props) {
  return (
    <CustomButton className="mono-font" onClick={props.onClick}>
      {props.title}
    </CustomButton>
  );
}

function Nav(props) {
  const classes = useStyles();

  return (
    <Box className={`${classes.nav} primary-color`}>
      {props.sections.map((section, index) => {
        if (index < props.sections.length - 1) {
          return (
            <React.Fragment key={index}>
              <NavButton
                onClick={() => props.handleOnClick(section.ref)}
                title={section.title}
              />
              <Separator />
            </React.Fragment>
          );
        } else {
          return (
            <NavButton
              key={index}
              onClick={() => props.handleOnClick(section.ref)}
              title={section.title}
            />
          );
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
        <Icon color="white" path={mdiChevronDown} size={3} />
      </Button>
    </Box>
  );
}

export default React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Layout title="Intro" hideTitle description="" hideDescription ref={ref}>
      <Box className={classes.flexVertical}>
        <NameTitle>Edward Hughes</NameTitle>
        <Nav sections={props.sections} handleOnClick={props.handleOnClick} />
        <ProceedButton
          onClick={() => props.handleOnClick(props.sections[0].ref)}
        />
      </Box>
    </Layout>
  );
});
