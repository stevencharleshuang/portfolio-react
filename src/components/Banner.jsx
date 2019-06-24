import React from 'react';
import { Link } from 'react-router-dom';
import MyStuff from './MyStuff';

export default function (props) {
  return (
    <div className="Banner">
      <Link to="/">
        <h1>Steven Charles Huang</h1>
      </Link>
      <h2>[ Web Developer ]</h2>
      <MyStuff />
    </div>
  )
}
