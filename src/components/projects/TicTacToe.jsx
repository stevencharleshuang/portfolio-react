import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import TicTacToe from '../../images/tictactoe.png';

export default function (props) {
  return (
    <div className="project tictactoe">
      <div className="show-gallery-btn" data-id="TicTacToe" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://tictactoe.herokuapp.com/public" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={TicTacToe} alt="tictactoe" />
        </a>
        <div className="web-project-info">
          <span id="tictactoe"><h3 className="text">Tic Tac Toe</h3></span>
          <p>
            This was an assignment that challenged us to implement winning game logic using
            jQuery and JavaScript to create a functional 2-player game.
            <br /><br />
            <span>Tech</span>: HTML, CSS, JavaScript, jQuery
          </p>
          <p>
            <a href="https://github.com/stevencharleshuang/jquery-tic-tac-toe" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://git.generalassemb.ly/stevencharleshuang/jquery-tic-tac-toe-hw" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
