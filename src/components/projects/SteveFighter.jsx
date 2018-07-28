import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
  return (
    <div className="SteveFighter">
      <h1  data-id="SteveFighter" onClick={props.handleClick}>You reached the {props.test} project, Dave</h1>
    </div>
  )
}
