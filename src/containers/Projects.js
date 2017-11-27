import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/projects.css";

import album_payloads from "./gallery_data";
import Album from "containers/Album";

export default class About extends React.Component {
  render() {
    console.log(album_payloads);
    return (
      <div id="projects-page">
        <Navbar activePage="projects" />
        <Logo />
        <Banner header={"This is what I work on!"} />
        <Album title={"Projects"} galleries={album_payloads} />
      </div>
    );
  }
}
