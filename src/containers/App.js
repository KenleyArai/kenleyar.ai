import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'containers/App.css';

// Importing pages
import Home from 'containers/Home';
import About from 'containers/About';
import Projects from 'containers/Projects';

export default class App extends Component {
  
  constructor() {
    super();
    
    this.state = {is_chewing: false}
  }

  render() {
    return (
      <Router>
        <div id="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}
