import React, { Component } from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Test from './components/Test';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Banner from './components/Banner';
/* Project Imports */
import SteveFighter from './components/projects/SteveFighter';
import IveBin from './components/projects/IveBin';
import SearchWoo from './components/projects/SearchWoo';
import TicTacToe from './components/projects/TicTacToe';
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
            <Route exact path="/" />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/stevefighter" component={SteveFighter} />
            <Route exact path="/ivebin" component={IveBin} />
            <Route exact path="/searchwoo" component={SearchWoo} />
            <Route exact path="/TicTacToe" component={TicTacToe} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
