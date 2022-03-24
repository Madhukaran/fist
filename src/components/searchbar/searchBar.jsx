import React from "react";
import './searchBar.css';
import { Search } from 'react-bootstrap-icons';
import EmojiButton from '../emoji/emojiButton';

const SearchBarComponent = () => (
    <div className="_searchBar">
        <div className="searchBar">
            <Search className="searchBarIcon" />
            <input className="searchBarForm" type="text" placeholder="Write Something!" />
        </div>
        <hr className="searchBarSplit"></hr>
        <div className="searchBarWidget">
            <button className="btn">Text</button>
            <button className="btn">Photo</button>
            <button className="btn">Video</button>
            <button className="btn">Live</button>
            <EmojiButton />
        </div>
    </div>
);

export default SearchBarComponent