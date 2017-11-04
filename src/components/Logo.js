import React from "react";
import "logo.css";
import logo from 'images/logo.svg';
import logoSmall from 'images/logo-small.svg';

export default class Logo extends React.Component {
    render() {
        return (<img
            id={this.props["is_home"]
            ? "logo-home"
            : "logo"}
            alt={"Kenley Arai - Software Developer"}
            className="grid-item"
            src={this.props["is_home"]
            ? logo
            : logoSmall}/>);
    }
}
