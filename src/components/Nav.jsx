import React from 'react';
import {Link} from 'react-router-dom';

export default function () {
  return (
    <nav>
      <ul>
        <Link to="/about"><li>About</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  );
}
