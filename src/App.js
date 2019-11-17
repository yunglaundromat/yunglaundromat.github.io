import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Home } from 'react-router-dom';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

class App extends Component {

  render() {
    return (
      <div>
        Something's working!
        <Route exact path={'/'} render={ (routerProps) => < Home routerProps={routerProps} />} />
      </div>
    )
  }
}

export default App;
