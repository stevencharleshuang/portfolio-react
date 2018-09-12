import React from 'react';
import SteveFighterThmb from '../images/steve-fighter.png';
import IveBinThmb from '../images/ivebin.png';
import IveBin2 from '../images/ivebin2.png';
import TicTacToeThmb from '../images/tictactoe.png';

export default function (props) {
  return (
    <div className="ProjectsGallery">
      <ul>
        <li className="fade-in one">
          <h2>Steve Fighter</h2>
          <br />
          <img src={SteveFighterThmb} data-id="SteveFighter" onClick={props.handleClick} alt="steve fighter"/>
        </li>
        <li className="fade-in two">
          <h2>IveBin</h2>
          <br />
          <img src={IveBinThmb} data-id="IveBin" onClick={props.handleClick} alt="ivebin"/>
        </li>
        <li className="fade-in three">
          <h2>IveBin 2</h2>
          <br />
          <img src={IveBin2} data-id="IveBin2" onClick={props.handleClick} alt="ivebin 2"/>
        </li>
        <li className="fade-in four">
          <h2>Tic Tac Toe</h2>
          <br />
          <img src={TicTacToeThmb} data-id="TicTacToe" onClick={props.handleClick} alt="tic tac toe"/>
        </li>
      </ul>
    </div>
  )
}
