import React, { Component } from 'react';

import PostComponent from './post.js';
import UploaderComponent from './uploader.js';

class ImageBoardComponent extends Component {
  constructor() {
    super();
    this.defaultStyle = {display: "flex", flexDirection: "column"};
    this.state = {
      posts: [
        {imageDataUrl: "http://lorempixel.com/200/150", postText: "FIRST!!1"},
        {imageDataUrl: "http://lorempixel.com/200/100", postText: "Hei"},
      ]
    };
  }
  _addPost(post) {
    this.setState({
      posts: [post].concat(this.state.posts)
    });
  }
  render() {
    const style = {};
    Object.assign(style, this.defaultStyle, this.props.style);
    return (
      <div style={style}>
        <UploaderComponent addPostCallback={(post) => this._addPost(post)} />
        {this.state.posts.map((post, index) => <PostComponent key={index} imageDataUrl={post.imageDataUrl} postText={post.postText} />)}
      </div>
    );
  }
}

export default ImageBoardComponent;
