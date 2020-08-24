import React from "react";
import Container from "@material-ui/core/Container";
import Intro from "sections/Intro";
import AboutMe from "sections/AboutMe";
import Skills from "sections/Skills";
import Projects from "sections/Projects";

// Render website with all 4 sections

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.aboutMeRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();

    this.sections = [
      {
        title: "About me",
        handleOnClick: () => this.scrollTo(this.aboutMeRef),
        component: <AboutMe ref={this.aboutMeRef} key={this.title} />,
      },
      {
        title: "Skills",
        handleOnClick: () => this.scrollTo(this.skillsRef),
        component: <Skills ref={this.skillsRef} key={this.title} />,
      },
      {
        title: "Projects",
        handleOnClick: () => this.scrollTo(this.projectsRef),
        component: <Projects ref={this.projectsRef} key={this.title} />,
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
          <Intro sections={this.sections} />

          {this.sections.map((section) => {
            return section.component;
          })}
        </Container>
      </Container>
    );
  }
}
