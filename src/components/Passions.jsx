import React, { Component } from 'react';
import TypeIt from 'typeit';

export default class Passions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    new TypeIt('.passion', {
        strings: ['web development', 'music', 'skateboarding'],
        speed: 100,
        breakLines: false,
        loop: true,
        autoStart: false
    })
  }

  render() {
    return (
      <div className="passions fade-in two">
        <p>
          <span id="text-passions">passions</span> = { '[' }
        </p>
          &nbsp;&nbsp;&nbsp;&nbsp;<span id="text-passion">'<span className="passion"></span>'</span>,
        <p>
          { '];' }
        </p>
      </div>
    );
  }
}
