import React, { Component } from 'react';

export default class Passions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passions: ['web development', 'music', 'skateboarding'],
    }
  }

  render() {
    let passion = this.state.passions.slice().map((passion) => {
      return ` '${passion}'`
    })
    return (
      <div className="passions fade-in two">
        <p>{`passions = [
          ${passion}
          ]`}</p>
      </div>
    );
  }
}
