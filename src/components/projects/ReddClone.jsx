import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import ReddClone from '../../images/redd-clone.png';

export default function (props) {
  return (
    <div className="project reddclone">
      <div className="show-gallery-btn" data-id="ReddClone" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://peaceful-wright-2755e9.netlify.com/" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={ReddClone} alt="reddclone" />
        </a>
        <div className="web-project-info">
          <span id="reddclone"><h3 className="text">Redd-Clone</h3></span>
          <p>
            This was a collaborative full stack project that used paired program and extreme programming to build a mock reddit application.
            Contributed to the development of the front end using vanilla JavaScript to fetch and persist data from a back end built with microservices 
            <br /><br />
            <span>Tech</span>: HTML, CSS, Bulma, JavaScript, Java, Spring Boot, FlyWay, Hibernate, PostgreSQL, Docker, JSON Web Tokens, Eureka, Zuul, Open Feign
          </p>
          <p>
            <a href="https://peaceful-wright-2755e9.netlify.com/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/ntuvera/spring-boot-microservices-reddit-api" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
