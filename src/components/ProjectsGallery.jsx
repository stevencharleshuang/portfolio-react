import React from 'react';
import SteveFighterThmb from '../images/steve-fighter.png';
import IveBinThmb from '../images/ivebin.png';
import SearchWooThmb from '../images/searchwoo.png';
import TicTacToeThmb from '../images/tictactoe.png';

export default function (props) {
  return (
    <div className="ProjectsGallery">
      <ul>
        <li>
          Steve Fighter
          <br />
          <img src={SteveFighterThmb} data-id="SteveFighter" onClick={props.handleClick} alt="steve fighter"/>
        </li>
        <li>
          IveBin
          <br />
          <img src={IveBinThmb} data-id="IveBin" onClick={props.handleClick} alt="ivebin"/>
        </li>
        <li>
          Search Woo
          <br />
          <img src={SearchWooThmb} data-id="SearchWoo" onClick={props.handleClick} alt="search woo"/>
        </li>
        <li>
          Tic Tac Toe
          <br />
          <img src={TicTacToeThmb} data-id="TicTacToe" onClick={props.handleClick} alt="tic tac toe"/>
        </li>
      </ul>
    </div>
  )
}
