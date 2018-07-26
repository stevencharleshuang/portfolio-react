import React, { Component } from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Test from './components/Test';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Steve wuz here</h1>
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
