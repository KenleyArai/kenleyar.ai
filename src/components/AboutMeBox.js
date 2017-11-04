import React from "react";
import "components/aboutmebox.css";

export default class AboutMeBox extends React.Component {
    render() {
        return (
            <div id="aboutmebox">
                <div className='aboutmebox-portrait'>
                    <img className='aboutmebox-img' src={this.props['src']} alt={'About box'}/>
                    <div className='aboutmebox-title'>{this.props['title']}</div>
                </div>
                <div className='aboutmebox-msg'>{this.props['msg']}</div>
            </div>
        );
    }
}
