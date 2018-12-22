import React, { Component } from 'react';
import './App.css';
import Customer from './components/customers/customers.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Customer />
      </div>
    );
  }
}

export default App;
