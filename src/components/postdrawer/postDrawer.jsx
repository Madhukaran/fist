import React, { Component } from "react";
import './postDrawer.css';
import menuItems from '../../config.json';
import PostData from "../posts/post";
import SearchBarComponent from '../searchbar/searchBar';

class PostDrawer extends Component {

    state = {
        posts: menuItems
    };

    render() {
        var posts = this.state.posts;
        return (
            <div className="postdrawer">
                <SearchBarComponent />
                <PostData posts={posts} />
            </div>
        );
    }
}

export default PostDrawer;