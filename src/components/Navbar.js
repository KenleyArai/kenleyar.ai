import React from "react";

import {
    Link
} from 'react-router-dom';

import "components/navbar.css";

export default class Navbar extends React.Component {
    render() {
        return ( <
            div id = "navbar"
            className = "grid-item" >
            <
            Link className = {
                this.props['activePage'] === 'home' ? 'link active' : 'link'
            }
            to = "/" > Home < /Link> <
            Link className = {
                this.props['activePage'] === 'about' ? 'link active' : 'link'
            }
            to = "/about" > About < /Link> <
            Link className = {
                this.props['activePage'] === 'projects' ? 'link active' : 'link'
            }
            to = "/projects" > Albums / Projects < /Link> <
            /div>
        );
    }
}