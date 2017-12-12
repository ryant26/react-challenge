import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Tech Challenge</h1>
        </header>
        <p className="App-intro">
          Enter your postal code to find your MP!
          <br />
          <input />
          <br />
          <button>Go</button>
          {/* Feel free to add styles to App.css! */}
        </p>
      </div>
    );
  }
}

export default App;
