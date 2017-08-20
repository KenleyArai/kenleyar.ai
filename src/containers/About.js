import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/about.css";

export default class About extends React.Component {
    render() {
        return (
            <div id="about-page">
                <Navbar activePage='about' />
                <Logo />
                <Banner header={"Who am I?"} />
                <div id="about-me">
                    <div id="message"> I am a Software Developer! What should I put here? </div>
                </div>
            </div>
        );
    }
}