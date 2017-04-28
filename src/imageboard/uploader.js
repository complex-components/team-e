import React, { Component } from 'react';

class UploaderComponent extends Component {
    constructor() {
        super();
        this.state = {
            imageDataUrl: null,
            postText: ""
        }
    }
    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imageDataUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }
    _handleTextChange(e) {
        this.setState({postText: e.target.value})
    }
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", padding: "5px", backgroundColor: "#EECCCC"}}>
                <p>Add a nice post: </p>
                <textarea rows="5" cols="60" onChange={(e)=>this._handleTextChange(e)} />
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <input type="file" onChange={(e)=>this._handleImageChange(e)}/>
                    <input type="submit" onClick={(e)=>this.props.addPostCallback(this.state)} />
                </div>
            </div>
        )
    }
}

export default UploaderComponent;