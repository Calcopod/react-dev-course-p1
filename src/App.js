import React, { Component } from 'react';
import CardList from './Components/CardList/card_list.jsx'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json() )
      .then( users => this.setState({monsters: users}) )
  }

  render() {
    return (
      <div>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
