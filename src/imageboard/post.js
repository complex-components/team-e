import React, { Component } from 'react';

import Votes from './votes.js';

class PostComponent extends Component {
    constructor() {
        super();
        this.state = {expand: false};
    }
    _getImageStyle() {
        if (this.state.expand) {
            return {maxWidth: "90%"};
        } else {
            return {maxWidth: "200px", maxHeight: "200px", marginLeft: "20px"};
        }
    }
    _toggleExpand() {
        this.setState({expand: !this.state.expand});
    }
    render () {
        return (
            <div style={{display: "flex", flexDirection: "row", margin: "5px", padding: "5px", backgroundColor: "#EECCCC"}}>
                <Votes />
                <div style={this._getImageStyle()}>
                    <img className="image" src={this.props.imageDataUrl} alt="" style={{maxWidth: "100%", maxHeight: "100%"}} onClick={() => this._toggleExpand()} />
                </div>
                <p style={{marginLeft: "20px"}}>{this.props.postText}</p>
            </div>
        );
    }
}

export default PostComponent;