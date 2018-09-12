import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import IveBin2 from '../../images/ivebin2.png';

export default function (props) {
  return (
    <div className="project ivebin2">
      <div className="show-gallery-btn" data-id="IveBin2" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://steve-react-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={IveBin2} alt="ivebin2" />
        </a>
        <div className="web-project-info">
          <span id="ivebin2"><h3 className="text">IveBin 2</h3></span>
          <p>
            This is a new version of a previously made app, re-envisioned using
            React on the front end, Express on the back end, authentication and
            authorization using JWT and bCrypt, and a multiple table relational
            database queried using PG-Promise and PSQL.
            <br /><br />
            With a focus on travel blogging, this app allows users full-CRUD
            functionality for their blog entries as well as their individual
            user accounts
            <br /><br />
            <span>Tech</span>: HTML, CSS, JavaScript, Node, Express, React, PostgreSQL, JWT, bCrypt, PG-Promise, Moment
          </p>
          <p>
            <a href="https://steve-react-blog.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/stevencharleshuang/react-blog" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
