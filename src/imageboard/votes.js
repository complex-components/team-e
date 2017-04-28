import React, { Component } from 'react';

class VoteComponent extends Component {
    constructor() {
        super();
        this.state = {votes: 0}
    }
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <button ref="up" onClick={(e) => this.setState({votes: this.state.votes + 1})}>^</button>
                <span>{this.state.votes}</span>
                <button ref="down" onClick={(e) => this.setState({votes: this.state.votes - 1})}>v</button>
            </div>
        );
    }
}

export default VoteComponent;