import React from "react";
import "components/aboutmebox.css";

export default class AboutMeBox extends React.Component {
    render() {
        return (
            <div id="aboutmebox">
                <img className='aboutmebox-img' src={this.props['src']} />
                <div className='aboutmebox-title'>{this.props['title']}</div>
            </div>
        );
    }
}
