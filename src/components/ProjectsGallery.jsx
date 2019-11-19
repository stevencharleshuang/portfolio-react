import React from 'react';
import SteveFighterThmb from '../images/steve-fighter.png';
import IveBinThmb from '../images/ivebin.png';
import IveBin2 from '../images/ivebin2.png';
import MisterKatThmb from '../images/misterkat.png';
import ReddClone from '../images/redd-clone.png';

export default function (props) {
  return (
    <div className="ProjectsGallery">
      <ul>
        <li className="fade-in four">
          <h2>Redd-Clone</h2>
          <br />
          <img src={ReddClone} data-id="ReddClone" onClick={props.handleClick} alt="redd clone"/>
        </li>
        <li className="fade-in four">
          <h2>MisterKat</h2>
          <br />
          <img src={MisterKatThmb} data-id="MisterKat" onClick={props.handleClick} alt="mister kat"/>
        </li>
        <li className="fade-in three">
          <h2>IveBin 2</h2>
          <br />
          <img src={IveBin2} data-id="IveBin2" onClick={props.handleClick} alt="ivebin 2"/>
        </li>
        <li className="fade-in two">
          <h2>IveBin</h2>
          <br />
          <img src={IveBinThmb} data-id="IveBin" onClick={props.handleClick} alt="ivebin"/>
        </li>
        <li className="fade-in one">
          <h2>Steve Fighter</h2>
          <br />
          <img src={SteveFighterThmb} data-id="SteveFighter" onClick={props.handleClick} alt="steve fighter"/>
        </li>
      </ul>
    </div>
  )
}
