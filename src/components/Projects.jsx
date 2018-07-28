import React, { Component } from 'react';
import SteveFighter from './projects/SteveFighter';
import IveBin from './projects/IveBin';
import SearchWoo from './projects/SearchWoo';
import TicTacToe from './projects/TicTacToe';
import SteveFighterThmb from '../images/steve-fighter.png';
import IveBinThmb from '../images/ivebin.png';
import SearchWooThmb from '../images/searchwoo.png';
import TicTacToeThmb from '../images/tictactoe.png';

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
          <li>
            Steve Fighter
            <br />
            <img data-id="SteveFighter" onClick={this.handleClick} src={SteveFighterThmb} />
          </li>
          <li>
            IveBin
            <br />
            <img src={IveBinThmb} data-id="IveBin" onClick={this.handleClick} />
          </li>
          <li>
            Search Woo
            <br />
            <img src={SearchWooThmb} data-id="SearchWoo" onClick={this.handleClick} />
          </li>
          <li>
            Tic Tac Toe
            <br />
            <img src={TicTacToeThmb} data-id="TicTacToe" onClick={this.handleClick} />
          </li>
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
