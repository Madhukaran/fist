import React, { Component } from "react";
import Picker from 'emoji-picker-react';
import './emojiButton.css';
import { Popover, OverlayTrigger } from "react-bootstrap";
import { EmojiHeartEyes } from 'react-bootstrap-icons';


class EmojiButton extends Component {
    render() {
        const popover = (
            <Popover id="popover-basic">
                <Picker disableSearchBar="True" pickerStyle={{ 'position': 'absolute', 'color': 'black' }} />
            </Popover>
        );

        return (
            <div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <button className="btn emoji-button"><EmojiHeartEyes /></button>
                </OverlayTrigger>
            </div >
        );
    }
}


export default EmojiButton;