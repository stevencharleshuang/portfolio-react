import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import DanSchein from '../../images/dan-schein.png';

export default function (props) {
  return (
    <div className="project dan-schein">
      <div className="show-gallery-btn" data-id="DanSchein" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://github.com/stevencharleshuang/dan-portfolio-prototype" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={DanSchein} alt="dan-schein" />
        </a>
        <div className="web-project-info">
          <span id="dan-schein"><h3 className="text">DanSchein.net</h3></span>
          <p>
            This is a portfolio website created for a New York City based painter 
            with gallery showings in Copenhagen and New York City. The website 
            was created using React and was primarily a front end commission. 
            The finished webite was deployed to Netlify for hosting and is 
            currently pending connection to the main domain.
            <br />
          </p>
          <p>
            <a href="https://confident-lamarr-e37a17.netlify.com/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/stevencharleshuang/dan-portfolio-prototype" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
