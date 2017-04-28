import React, { Component } from 'react';

import PostComponent from './post.js';
import UploaderComponent from './uploader.js';

class ImageBoardComponent extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {imageDataUrl: "http://lorempixel.com/200/150", postText: "FIRST!!1"},
        {imageDataUrl: "http://lorempixel.com/200/100", postText: "Hei"},
      ]
    };
  }
  _addPost(post) {
    this.setState({
      posts: this.state.posts.concat(post)
    });
  }
  render() {
    return (
      <div className="fantastic-component" style={{display: "flex", flexDirection: "column"}}>
        <UploaderComponent addPostCallback={(post) => this._addPost(post)} />
        {this.state.posts.map((post) => <PostComponent imageDataUrl={post.imageDataUrl} postText={post.postText} />)}
      </div>
    );
  }
}

export default ImageBoardComponent;
