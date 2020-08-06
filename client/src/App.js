import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './fib';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <div className="link">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/otherpage">Other page</Link></li>
            </ul>
          </div>

        </div>
        <div className="fix">
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
