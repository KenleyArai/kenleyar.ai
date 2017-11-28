import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/projects.css";

import album_payload from "./gallery_data";
import Album from "containers/Album";
import Loading from "components/Loading";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _loaded: false
    };
  }

  componentDidMount() {
    this.setState({ _loaded: true, ...album_payload });
  }

  render() {
    if (!this.state._loaded) {
      return <Loading />;
    }

    return (
      <div id="projects-page">
        <Navbar activePage="projects" />
        <Logo />
        <Banner header={"This is what I haved worked on!"} />
        <Album title={"Albums"} galleries={this.state.albums} />
        <Album title={"Projects"} galleries={this.state.single_projects} />
      </div>
    );
  }
}
