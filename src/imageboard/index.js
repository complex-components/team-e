import React, { Component } from 'react';

import PostComponent from './post.js';

class ImageBoardComponent extends Component {
  render() {
    return (
      <div className="fantastic-component" style={{display: "flex", flexDirection: "column"}}>
        <PostComponent imageDataUrl="http://lorempixel.com/200/150" postText="FIRST!!1" />
        <PostComponent imageDataUrl="http://lorempixel.com/200/200" postText="Hei :)s" />
      </div>
    );
  }
}

export default ImageBoardComponent;
