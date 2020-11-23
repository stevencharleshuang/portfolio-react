import React from 'react';
import Git from '../../images/github.png';
import Web from '../../images/web.png';
import MaskTracker from '../../images/mask-tracker.png';

export default function (props) {
  return (
    <div className="project mask-tracker">
      <div className="show-gallery-btn" data-id="MaskTracker" onClick={props.handleClick}> x </div>
      <div className="web-project">
        <a href="https://github.com/stevencharleshuang/mask-tracker-web" target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={MaskTracker} alt="mask-tracker" />
        </a>
        <div className="web-project-info">
          <span id="mask-tracker"><h3 className="text">Mask Tracker</h3></span>
          <p>
            This is an application that allows users to create accounts and then track the longevity of their masks as they use them. They are able to update the number of hours that they have used their masks and therefore make sure that they are still safe for use.
          </p>
          <p>
            The application utilizes Firebase Firestore for authentication, storage and user and mask data. React and Redux are used on the front end.
          </p>
          <p>
            <a href="https://nostalgic-shockley-8a5b2b.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Web} alt="web" />
            </a>
            <a href="https://github.com/stevencharleshuang/mask-tracker-web" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={Git} alt="git" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
