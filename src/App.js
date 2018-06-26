import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import AppHolder from './components/appHolder/AppHolder';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <AppHolder />
      </HashRouter>
    );
  }
}

export default App;
