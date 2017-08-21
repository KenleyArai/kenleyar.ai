import React from "react";
import Logo from "Logo";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/about.css";

import AboutMeBox from "components/AboutMeBox";

import meImage from 'images/me.svg';
import lenaImage from 'images/lena.svg';
import inuImage from 'images/inu.svg'

export default class About extends React.Component {
    render() {
        return (
            <div id="about-page">
                <Navbar activePage='about' />
                <Logo />
                <Banner header={"Who am I?"} />
                <div id="about-me">
                    <div id="message"> 
                        <AboutMeBox src={meImage} title={'The Boy'} />
                        <AboutMeBox src={lenaImage} title={'The Girl'} />
                        <AboutMeBox src={inuImage} title={'The Mastermind'} />
                    </div>
                </div>
            </div>
        );
    }
}