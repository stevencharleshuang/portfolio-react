import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
  return (
    <div className="IveBin">
      <div className="ShowGalleryBtn" data-id="IveBin" onClick={props.handleClick}> x </div>
      <h1>You reached the IveBin project, Dave</h1>
    </div>
  );
}
