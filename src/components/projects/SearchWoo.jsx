import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import SearchWoo from '../../images/searchwoo.png';

export default function (props) {
  return (
    <div className="project searchwoo">
      <div className="show-gallery-btn" data-id="SearchWoo" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://searchwoo.herokuapp.com/public" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={SearchWoo} alt="searchwoo" />
        </a>
        <div className="web-project-info">
          <span id="searchwoo"><h3 className="text">SearchWoo</h3></span>
          <p>
            This is a group-made CRUD app based on the functionality of FourSquare and Yelp
            where users can log in, choose a business they would like to review,
            then add their own review to the business.
            <br /><br />
            <span>Tech</span>: HTML, CSS, JavaScript, Node, Express, React, PostgreSQL
          </p>
          <p>
            <a href="https://searchwoo.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://git.generalassemb.ly/team-awesome/project-3/tree/dev" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
