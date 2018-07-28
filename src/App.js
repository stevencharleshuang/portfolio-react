import React, { Component } from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Test from './components/Test';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Banner from './components/Banner';
import "react-awesome-popover/dest/react-awesome-popover.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Banner />
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
