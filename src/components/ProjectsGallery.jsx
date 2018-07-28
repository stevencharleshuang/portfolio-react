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
          <h2>Steve Fighter</h2>
          <br />
          <img src={SteveFighterThmb} data-id="SteveFighter" onClick={props.handleClick} alt="steve fighter"/>
        </li>
        <li>
          <h2>IveBin</h2>
          <br />
          <img src={IveBinThmb} data-id="IveBin" onClick={props.handleClick} alt="ivebin"/>
        </li>
        <li>
          <h2>Search Woo</h2>
          <br />
          <img src={SearchWooThmb} data-id="SearchWoo" onClick={props.handleClick} alt="search woo"/>
        </li>
        <li>
          <h2>Tic Tac Toe</h2>
          <br />
          <img src={TicTacToeThmb} data-id="TicTacToe" onClick={props.handleClick} alt="tic tac toe"/>
        </li>
      </ul>
    </div>
  )
}
