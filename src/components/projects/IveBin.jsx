import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import IveBin from '../../images/ivebin.png';

export default function (props) {
  return (
    <div className="project IveBin">
      <div className="show-gallery-btn" data-id="IveBin" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://ivebin.herokuapp.com/public" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={IveBin} alt="ivebin" />
        </a>
        <div className="web-project-info">
          <span id="ivebin"><h3 className="text">IveBin</h3></span>
          <p>
            This is a full-CRUD app for users to create a profile, log in, then
            blog about their travel experiences with the ability to
            upload a related image.
            <br /><br />
            <span>Tech</span>: HTML, CSS, JavaScript, Node, Express, PostgreSQL, PG-Promise, bCrypt, EJS
          </p>
          <p>
            <a href="https://ivebin.herokuapp.com/public" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/stevencharleshuang/ivebin" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
