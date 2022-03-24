import React, { Component } from "react";
import './leftBar.css';
import { PersonCircle } from 'react-bootstrap-icons';



class LeftBarComponent extends Component {
    render() {
        return (
            <div className="leftBar">
                <div className="profileComponent">
                    <div className="profileComponentWrapper">
                        <PersonCircle className="profile_picture" />
                        <div className="profileNameWrapper">
                            <p className="profile_name">Madhukaran</p>
                            <div className="profileNameWrapperSettings">
                                <span>View Profile</span>
                                <span>&nbsp;|&nbsp;</span>
                                <span>Settings</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topComponent">
                    <div className="component_title">
                        What's Happening
                    </div>
                    <div className="content_data">
                        <div className="data">
                            <span className="category">War in Ukraine . Live</span>
                            <span className="title">Ukraine rejects Russia’s demand to surrender Mariupol by Monday morning</span>
                        </div>
                        <div className="d_Pic"></div>
                    </div>
                    <div className="content_data">
                        <div className="data">
                            <span className="category">War in Ukraine . Live</span>
                            <span className="title">Ukraine rejects Russia’s demand to surrender Mariupol by Monday morning</span>
                        </div>
                        <div className="d_Pic"></div>
                    </div>
                    <div className="content_data">
                        <div className="data">
                            <span className="category">War in Ukraine . Live</span>
                            <span className="title">Ukraine rejects Russia’s demand to surrender Mariupol by Monday morning</span>
                        </div>
                        <div className="d_Pic"></div>
                    </div>
                    <div className="content_data">
                        <div className="data">
                            <span className="category">War in Ukraine . Live</span>
                            <span className="title">Ukraine rejects Russia’s demand to surrender Mariupol by Monday morning</span>
                        </div>
                        <div className="d_Pic"></div>
                    </div>
                    <div className="content_data">
                        <div className="data">
                            <span className="category">War in Ukraine . Live</span>
                            <span className="title">Ukraine rejects Russia’s demand to surrender Mariupol by Monday morning</span>
                        </div>
                        <div className="d_Pic"></div>
                    </div>
                    <span className="showMore">show More</span>
                </div>
                <div className="bottomComponent">
                    <div className="component_title">
                        Who to follow
                    </div>
                    <div className="content_data">
                        <div className="b_Pic"></div>
                        <p className="userName">Jeff Bezos</p>
                        <button className="btn follow_button">Follow</button>
                    </div>
                    <div className="content_data">
                        <div className="b_Pic"></div>
                        <p className="userName">Satoshi Nakamoto</p>
                        <button className="btn follow_button">Follow</button>
                    </div>
                    <div className="content_data">
                        <div className="b_Pic"></div>
                        <p className="userName">Elon Musk</p>
                        <button className="btn follow_button">Follow</button>
                    </div>
                    <span className="showMore">show More</span>
                </div>
            </div>
        );
    }
}

export default LeftBarComponent;