import React from "react";
import Container from "@material-ui/core/Container";
import Intro from "sections/Intro";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.sections = [
      {
        title: "About me",
        ref: React.createRef(),
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
        </Container>
      </Container>
    );
  }
}
