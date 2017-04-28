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
        e.preventDefault();
        this.setState({postText: e.target.value});
    }
    _handleSubmit() {
        const post = this.state;
        this.setState({
            imageDataUrl: null,
            postText: ""
        });
        this.refs.filePicker.value = "";
        this.props.addPostCallback(post);
    }
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column", margin: "5px", padding: "5px", backgroundColor: "#EECCCC"}}>
                <p>Add a nice post: </p>
                <textarea value={this.state.postText} rows="5" cols="60" onChange={(e)=>this._handleTextChange(e)} />
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <input ref="filePicker" type="file" onChange={(e)=>this._handleImageChange(e)}/>
                    <input type="submit" onClick={(e)=>this._handleSubmit()} />
                </div>
            </div>
        )
    }
}

export default UploaderComponent;