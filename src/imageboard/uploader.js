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
            <div>
                <input type="file" onChange={(e)=>this._handleImageChange(e)}/>
                <input type="textarea" onChange={(e)=>this._handleTextChange(e)} />
                <input type="submit" onClick={(e)=>this.props.addPostCallback(this.state)} />
            </div>
        )
    }
}

export default UploaderComponent;