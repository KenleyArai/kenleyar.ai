import React from "react";
import Logo from "Logo";
import MediaQuery from "react-responsive";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import "containers/home.css";

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-page" className="grid">
                <MediaQuery query='(max-device-width: 768px)'>
                    <Navbar activePage='home' />
                    <Banner header={"Hi, I'm Kenley!"} />
                </MediaQuery>

                <Logo is_home={ true } />

                <MediaQuery query='(min-device-width: 769px)'>
                    <Banner header={"Hi, I'm Kenley!"} />
                    <Navbar activePage='home' />
                </MediaQuery>
            </div>
        );
    }
}
