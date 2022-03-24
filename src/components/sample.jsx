// ######################################################################################################
import React, { Component } from 'react';
import Posts from './Posts';

export default class App extends Component {
  state = { posts: [] };

  //fetch the posts and store them in the state
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {/* pass the state (posts) as props to Posts */}
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

import React from 'react';

// No need for a class based comp
// destructure the props and you have all your data 
const Posts = ({ posts }) => (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <hr />
      </div>
    ))}
  </div>
);

export default Posts;

// ######################################################################################################
