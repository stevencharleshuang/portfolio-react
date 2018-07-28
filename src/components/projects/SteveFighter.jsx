import React from 'react';
import {Link} from 'react-router-dom';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import SteveFighter from '../../images/steve-fighter.png';

export default function (props) {
  return (
    <div className="project SteveFighter">
      <div className="show-gallery-btn" data-id="SteveFighter" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="http://eager-blackwell-7636a3.bitballoon.com/" target="_blank">
          <img className="project-image" src={SteveFighter} alt="steve-fighter" />
        </a>
        <div className="web-project-info">
          <span id="steve-fighter"><h3 className="text">Steve Fighter II</h3></span>
          <p>
            This is a game based on the popular 90s game by capcom.
            It features a player signup form and hit-detection without HTML5 Canvas
            <br /><br />
            <span>Tech</span>:  HTML, CSS, JavaScript, jQuery
          </p>
          <p>
            <a href="http://eager-blackwell-7636a3.bitballoon.com/" target="_blank">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/stevencharleshuang/steve-fighter-ii" target="_blank">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
