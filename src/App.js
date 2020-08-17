import React from "react";
import Container from "@material-ui/core/Container";
import Intro from "sections/Intro";
import AboutMe from "sections/AboutMe";
import Skills from "sections/Skills";
import Projects from "sections/Projects";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.aboutMeRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();

    this.sections = [
      {
        title: "About me",
        ref: this.aboutMeRef,
        section: <AboutMe ref={this.aboutMeRef} />,
      },
      {
        title: "Skills",
        ref: this.skillsRef,
        section: <Skills ref={this.skillsRef} />,
      },
      {
        title: "Projects",
        ref: this.projectsRef,
        section: <Projects ref={this.projectsRef} />,
      },
    ];
  }

  scrollTo(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  render() {
    return (
      <Container className="runner-bg-color">
        <Container maxWidth="md">
          <Intro sections={this.sections} handleOnClick={this.scrollTo} />

          {this.sections.map((section, index) => {
            return section.section;
          })}
        </Container>
      </Container>
    );
  }
}
