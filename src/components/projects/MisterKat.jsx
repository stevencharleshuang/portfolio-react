import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import MisterKat from '../../images/misterkat.png';

export default function (props) {
  return (
    <div className="project misterkat">
      <div className="show-gallery-btn" data-id="MisterKat" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://peaceful-wright-2755e9.netlify.com/" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={MisterKat} alt="misterkat" />
        </a>
        <div className="web-project-info">
          <span id="misterkat"><h3 className="text">MisterKat</h3></span>
          <p>
            This is a project designing and developing the front end for a Travel
            Blogger's personal site for blogging about travels and sharing recipes.
            Dummy data was used for this mockup and development of the backend is
            currently in progress.
            <br /><br />
            <span>Tech</span>: React
          </p>
          <p>
            <a href="https://peaceful-wright-2755e9.netlify.com/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/stevencharleshuang/misterkat" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
