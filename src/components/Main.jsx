import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "money" : 0 
        }
    }
    render() {
        return (
            <div className="Main">
                <span>You have {this.state.money} money!</span>
            </div>
        );
    }
}

export default Main;