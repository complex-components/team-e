import React, { Component } from 'react';

import Votes from './votes.js';

class PostComponent extends Component {
    constructor() {
        super();
        this.state = {upvotes: 0};
    }
    render () {
        return (
            <div style={{display: "flex", flexDirection: "row", margin: "5px", padding: "5px", backgroundColor: "#EECCCC"}}>
                <Votes />
                <img className="image" src={this.props.imageDataUrl} alt="" style={{maxWidth: "200px", maxHeight: "200px", marginLeft: "20px"}} />
                <p style={{marginLeft: "20px"}}>{this.props.postText}</p>
            </div>
        );
    }
}

export default PostComponent;