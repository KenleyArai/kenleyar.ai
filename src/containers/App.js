import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import 'containers/App.css';

// Importing pages
import Home from 'containers/Home';
import About from 'containers/About';
import Projects from 'containers/Projects';

function NotFound(props) {
  return (
    <div className="page-container">
    </div>
  )
}

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
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route component={NotFound} />
        </div>
      </Router>
    );
  }
}
