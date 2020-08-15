import React from "react";
import Container from "@material-ui/core/Container";
import Intro from "sections/Intro";
import AboutMe from "sections/AboutMe";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.aboutMeRef = React.createRef();

    this.sections = [
      {
        title: "About me",
        ref: this.aboutMeRef,
        section: <AboutMe ref={this.aboutMeRef} />,
      },
      {
        title: "Skills",
        ref: React.createRef(),
      },
      {
        title: "Projects",
        ref: React.createRef(),
      },
    ];
  }

  handleOnClick(scrollTo) {
    if (scrollTo.current) {
      scrollTo.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  render() {
    return (
      <Container className="runner-bg-color">
        <Container maxWidth="md">
          <Intro sections={this.sections} handleOnClick={this.handleOnClick} />

          {this.sections.map((section, index) => {
            return section.section;
          })}
        </Container>
      </Container>
    );
  }
}
