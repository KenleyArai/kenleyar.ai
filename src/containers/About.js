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
                        <AboutMeBox src={meImage} title={'The Boy'} msg={"Hello! I'm Kenley, and I am a software developer. I am a motivated individual who loves to learn and grow! Alongside Computer Science I enjoy painting portraits with oil paints. Specifically, I enjoy duplicating Rembrandts. My current interest is developing beautiful websites using libraries and frameworks such as ReactJs with Redux or Ruby on Rails!"} />
                        <AboutMeBox src={lenaImage} title={'The Girl'}  msg={"This is my fiancé! She along being the love of my life she is getting a Ph.D. from Claremont Graduate School. She's pretty impressive, and you can find out more about her when she gets her site up and running! "}/>
                        <AboutMeBox src={inuImage} title={'The Mastermind'} msg={"This is my dog he is the brains behind our operation. He's the one who creates our five-year and ten-year plans. We pay him with belly rubs and treats!"} />
                    </div>
                </div>
            </div>
        );
    }
}