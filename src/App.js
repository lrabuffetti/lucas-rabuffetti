import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppHolder from './components/appHolder/AppHolder';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppHolder />
      </Router>
    );
  }
}

export default App;
