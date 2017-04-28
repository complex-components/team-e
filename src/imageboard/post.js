import React, { Component } from 'react';

/**
 * props:
 * - imageDataUrl
 * - postText
 */

class PostComponent extends Component {
    render () {
        return (
            <div style={{display: "flex", flexDirection: "column", padding:"10px"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={this.props.imageDataUrl} alt="" />
                    <p>{this.props.postText}</p>
                </div>
            </div>
        );
    }
}

export default PostComponent;