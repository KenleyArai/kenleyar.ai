import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/about.css";

import meImage from 'images/me.png';
import lenaImage from 'images/lena.png';
import inuImage from 'images/inu.png'

export default class About extends React.Component {
    render() {
        return (
            <div id="about-page">
                <Navbar activePage='about' />
                <Logo />
                <Banner header={"Who am I?"} />
                <div id="about-me">
                    <div id="message"> 
                        <img src={meImage} />
                        <img src={lenaImage} />
                        <img src={inuImage} />
                    </div>
                </div>
            </div>
        );
    }
}