import React from 'react';
import MyPic from '../images/mypic.png';

export default function () {
  return (
    <div className="About fade-in two">
      <img src={MyPic} alt="profile pic"/>
      <div className="AboutMe fade-in two">
        <p>
          I am a Web Developer with passions for
          music, gaming and all things related to problem-solving.
        </p>
        <p>
          In 2018, I completed the 12-week
          intensive Web Development Immersive program at General Assembly,
          New York where I completed four major projects, three of which
          required full-stack development. It was during this time that I
          realized my passion for game development and have been unconventionally
          creating games using JavaScript with jQuery, Crafty.js and HTML 5 Canvas.
        </p>
        <p>
          I graduated from the SUNY Purchase
          Conservatory of Music in 2009 with a Bachelor of Music in Studio
          Composition so when I'm not knee-deep in code, I enjoy composing,
          producing and recording music.
        </p>
      </div>
    </div>
  )
}
