import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/projects.css";

export default class About extends React.Component {
  render() {
    return (
      <div id="projects-page">
        <Navbar activePage="projects" />
        <Logo />
        <Banner header={"This is what I work on!"} />
      </div>
    );
  }
}
