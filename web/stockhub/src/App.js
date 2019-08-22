import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import ConnectedSearchBar from './SearchBar';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">stockhub</h1>
        <div className="App-search">
          <ConnectedSearchBar />
        </div>
      </div>
    );
  }
}

export default App;
