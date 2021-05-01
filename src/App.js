import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import About from 'sections/About';
import Intro from 'sections/Intro';
import Projects from 'sections/Projects';
import Skills from 'sections/Skills';

import { GlobalStyles } from './GlobalStyles';

// Render website with all 4 sections

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
      fontFamily: 'Open Sans, sans-serif',
      backgroundColor: GlobalStyles.bgColor,
      color: GlobalStyles.textColor,
    },
  },
  runner: {
    backgroundColor: GlobalStyles.runnerBgColor,
  },
}));

export default () => {
  const introRef = React.useRef();
  const aboutRef = React.useRef();
  const skillsRef = React.useRef();
  const projectsRef = React.useRef();
  const classes = useStyles();

  const sections = [
    {
      title: 'About me',
      handleOnClick: () => scrollTo(aboutRef),
      component: <About ref={aboutRef} key='1' />,
    },
    {
      title: 'Skills',
      handleOnClick: () => scrollTo(skillsRef),
      component: <Skills ref={skillsRef} key='2' />,
    },
    {
      title: 'Projects',
      handleOnClick: () => scrollTo(projectsRef),
      component: <Projects ref={projectsRef} key='3' />,
    },
  ];

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  return (
    <Container className={classes.runner}>
      <Container maxWidth='md'>
        <Intro ref={introRef} sections={sections} />

        {sections.map((section) => {
          return section.component;
        })}
      </Container>
    </Container>
  );
};
