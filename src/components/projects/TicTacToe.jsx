import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
  return (
    <div className="TicTacToe">
      <div className="ShowGalleryBtn" data-id="TicTacToe" onClick={props.handleClick}> x </div>
      <h1>You reached the TicTacToe project, Dave</h1>
    </div>
  );
}
