import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import ConnectedSearchBar from './SearchBar';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <ConnectedSearchBar />
      </div>
    );
  }
}

export default App;
