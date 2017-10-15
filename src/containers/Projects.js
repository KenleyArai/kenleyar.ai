import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import GalleryApp from "containers/GalleryApp";
import "containers/projects.css";

import weddingImg from "images/wedding-icon.png";
import roboCarImg from "images/robocar-icon.png";

export default class About extends React.Component {
    render() {
        return (
            <div id="projects-page">
                <Navbar activePage='projects'/>
                <Logo/>
                <Banner header={"This is what I work on!"}/>
                <GalleryApp/>
            </div>
        );
    }
}