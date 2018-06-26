import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppHolder from './components/appHolder/AppHolder';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppHolder />
      </BrowserRouter>
    );
  }
}

export default App;
