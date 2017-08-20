import React from "react";
import "components/banner.css";

export default class Banner extends React.Component {
    render() {
        return (
            <div id="banner" className="grid-item" >
                <div id="header">
                  { this.props['header'] }
                </div>
            </div>
        );
    }
}
