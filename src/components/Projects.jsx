import React, { Component } from 'react';
import SteveFighter from './projects/SteveFighter';
import IveBin from './projects/IveBin';
import SearchWoo from './projects/SearchWoo';
import TicTacToe from './projects/TicTacToe';

export default class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      SteveFighter: false,
      IveBin: false,
      SearchWoo: false,
      TicTacToe: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log('handleClick! e: ', e.target.dataset.id);
    switch (e.target.dataset.id) {
      case 'SteveFighter':
        this.setState((prevState) => ({
          SteveFighter: !prevState.SteveFighter,
          IveBin: false,
          SearchWoo: false,
          TicTacToe: false,
        }));
        break;
      case 'IveBin':
        this.setState((prevState) => ({
          SteveFighter: false,
          IveBin: !prevState.IveBin,
          SearchWoo: false,
          TicTacToe: false,
        }));
        break;
      case 'SearchWoo':
        this.setState((prevState) => ({
          SteveFighter: false,
          IveBin: false,
          SearchWoo: !prevState.SearchWoo,
          TicTacToe: false,
        }));
        break;
      case 'TicTacToe':
        this.setState((prevState) => ({
          SteveFighter: false,
          IveBin: false,
          SearchWoo: false,
          TicTacToe: !prevState.TicTacToe,
        }));
        break;
    }
  }

  render () {
    // console.log(this.state)
    return (
      <div className="Projects">
        <ul>
          <li data-id="SteveFighter" onClick={this.handleClick}>Steve Fighter</li>
          <li data-id="IveBin" onClick={this.handleClick}>Ive Bin</li>
          <li data-id="SearchWoo" onClick={this.handleClick}>Search Woo</li>
          <li data-id="TicTacToe" onClick={this.handleClick}>Tic Tac Toe</li>
        </ul>
        <div>
          {(this.state.SteveFighter === true) ? <SteveFighter /> : null}
          {(this.state.IveBin === true) ? <IveBin /> : null}
          {(this.state.SearchWoo === true) ? <SearchWoo /> : null}
          {(this.state.TicTacToe === true) ? <TicTacToe /> : null}
        </div>
      </div>
    )
  }
}
