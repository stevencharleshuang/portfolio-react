import React, { Component } from 'react';
import Git from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Resume from '../images/resume.png';
import ResumePDF from '../assets/resume.pdf';

export default class MyStuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ''
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    // console.log('detected mouse enter', e.target.dataset.id)
    let hoveredLink = e.target.dataset.id;
    this.setState({
      hoveredLink: hoveredLink,
    });
  }

    handleMouseLeave(e) {
    // console.log('detected mouse leave')
    this.setState({
      hoveredLink: '',
    });
  }

  render() {
    // console.log('state', this.state)
    return (
      <div className="MyStuff">
        <div className="icons fade-in three">
          <a href="https://github.com/stevencharleshuang/"
            target="_blank" rel="noopener noreferrer">
            <img src={Git} alt="Git Hub Link"
              data-id=".git"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave} />
          </a>
          <a href="https://www.linkedin.com/in/stevencharleshuang/"
            target="_blank" rel="noopener noreferrer">
            <img src= {LinkedIn} alt="Linked In Link"
              data-id=".linkedin"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave} />
          </a>
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <img src={Resume} alt="Resume Link"
              data-id=".resume"
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave} />
          </a>
        </div>
        <div className="icon-id fade-in one">
          <span>myLinks{this.state.hoveredLink}</span>
        </div>
      </div>
    );
  }
}
