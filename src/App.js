import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: "Hello Andrei!",
        };
    }

    render() {
        return (
            <div>
                <h1> {this.state.text} </h1>
                <button onClick={() => this.setState({text: "Hello Serban!"})}>
                    Change text 
                </button>
            </div>
        )
    }
}

export default App;
