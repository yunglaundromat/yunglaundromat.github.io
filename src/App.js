import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <Route exact path={'/'} render={ (routerProps) => < Home routerProps={routerProps} />} />
      </div>
    )
  }
}

export default App;
