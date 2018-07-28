import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
  return (
    <div className="SearchWoo">
      <div className="ShowGalleryBtn" data-id="SearchWoo" onClick={props.handleClick}> x </div>
      <h1>You reached the SearchWoo project, Dave</h1>
    </div>
  );
}
