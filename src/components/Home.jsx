import React from 'react';
// import Canvas from './Canvas';
import Passions from './Passions';
import Splash from '../images/splash-03.png';

export default function () {
  return (
    <div className="home fade-in two">
      <img src={Splash} alt="splash" />
      <Passions />
      {/*
      <h2>I'm Steve. Who would you be?</h2>
      <Canvas />
      */}
    </div>
  )
}
