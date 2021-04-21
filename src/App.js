import React, { Component } from 'react';
import CardList from './Components/CardList/card_list.jsx'

import './App.css';
import SearchBox from './Components/Searchbox/searchbox.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchfield: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json() )
      .then( users => this.setState({monsters: users}) )
  }

  handleChange = e => {
    this.setState({searchfield: e.target.value})
  }

  render() {
    const { monsters } = this.state;
    const filtered = monsters.filter( (monster, idx) => 
      monster.name.toLowerCase().includes( this.state.searchfield.toLowerCase() ) 
    );

    return (
      <div className="App">
        <h1>Robot Roledex</h1>
        <SearchBox placeholder="Monsters . . ." onChange={this.handleChange}/>
        <CardList monsters={filtered} />
      </div>
    )
  }
}

export default App;
