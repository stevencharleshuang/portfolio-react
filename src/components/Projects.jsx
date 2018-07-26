import React, { Component } from 'react';

export default class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('handleClick! e: ', e.target.dataset.id);
    switch (e.target.dataset.id) {
      case 'SteveFighter':
        console.log('SteveFighter');
        break;
      case 'IveBin':
        console.log('IveBin');
        break;
      case 'SearchWoo':
        console.log('SearchWoo');
        break;
      case 'TicTacToe':
        console.log('TicTacToe');
        break;
    }
  }

  render () {
    return (
      <div className="Projects">
        <h2>Projects</h2>
        <ul>
          <li data-id="SteveFighter" onClick={this.handleClick}>Steve Fighter</li>
          <li data-id="IveBin" onClick={this.handleClick}>Ive Bin</li>
          <li data-id="SearchWoo" onClick={this.handleClick}>Search Woo</li>
          <li data-id="TicTacToe" onClick={this.handleClick}>Tic Tac Toe</li>
        </ul>
      </div>
    )
  }
}
