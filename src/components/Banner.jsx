import React from 'react';
import Git from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Resume from '../images/resume.png';
import ResumePDF from '../assets/resume.pdf';

export default function () {
  return (
    <div className="Banner">
      <h1>Steven Charles Huang</h1>
      <h2>[ Web Developer ]</h2>
      <a href="https://github.com/stevencharleshuang/" target="_blank"><img src={Git} alt="Git Hub Link" /></a>
      <a href="https://www.linkedin.com/in/stevencharleshuang/" target="_blank"><img src= {LinkedIn} alt="Linked In Link" /></a>
      <a href={ResumePDF} target="_blank"><img src={Resume} alt="Resume Link" /></a>
    </div>
  )
}
