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
        return ( <
            div id = "about-page" >
            <
            Navbar activePage = 'about' / >
            <
            Logo / >
            <
            Banner header = {
                "Who am I?"
            }
            /> <
            div id = "about-me" >
            <
            div id = "message" >
            <
            AboutMeBox src = {
                meImage
            }
            title = {
                'The Boy'
            }
            msg = {
                "Hello! I'm Kenley, and I am a Software Engineer. I have a mixed bag of interests and experiences. At a young age, I traveled the world to as my mother finished her PH.D. This provided me a wide-ranging view and understanding of the world. More importantly, it taught me how people use software very differently around the world.\nFrom there I went to school to achieve my degree in Computer Science and Engineering from the University of California Riverside. While at school I worked for Dr. Eamonn Keogh in his Machine Learning lab. I worked on his sensor that classifies mosquitos. My biggest accomplishment while in school was being sent multiple times to the Center for Disease Control in Atlanta to gather data on various species, but specifically to classify the invasive species Aedes Aegypti.\nCurrently, I am honing my skills as a Software Engineer."
            }
            /> <
            AboutMeBox src = {
                lenaImage
            }
            title = {
                'The Girl'
            }
            msg = {
                "This is my beautiful wife, and we got married in fall of 2017 (you can see our wedding pictures under projects)! She is the love of my life, and she is getting a Ph.D. from Claremont Graduate School. She is amazing!"
            }
            /> <
            AboutMeBox src = {
                inuImage
            }
            title = {
                'The Mastermind'
            }
            msg = {
                "This is my dog! He is the brains behind our operation. He's the one who creates our five-year and ten-year plans. We pay him with belly rubs and treats!"
            }
            /> < /
            div > <
            /div> < /
            div >
        );
    }
}