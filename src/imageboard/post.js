import React, { Component } from 'react';

class PostComponent extends Component {
    render () {
        return (
            <div style={{display: "flex", flexDirection: "row", margin: "5px", padding: "5px", backgroundColor: "#EECCCC"}}>
                <img className="image" src={this.props.imageDataUrl} alt="" style={{maxWidth: "200px", maxHeight: "200px"}} />
                <p>{this.props.postText}</p>
            </div>
        );
    }
}

export default PostComponent;