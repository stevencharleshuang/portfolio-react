import React, { Component } from 'react';
import SteveFighter from './projects/SteveFighter';
import IveBin from './projects/IveBin';
import IveBin2 from './projects/IveBin2';
import MisterKat from './projects/MisterKat';
import ReddClone from './projects/ReddClone';
import ProjectsGallery from './ProjectsGallery';

export default class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gallery: true,
      SteveFighter: false,
      IveBin: false,
      IveBin2: false,
      TicTacToe: false,
      MisterKat: false,
      ReddClone: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log('handleClick! e: ', e.target);
    switch (e.target.dataset.id) {
      case 'ReddClone':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          IveBin2: false,
          TicTacToe: false,
          ReddClone: !prevState.ReddClone
        }));
        break;
      case 'SteveFighter':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: !prevState.SteveFighter,
          IveBin: false,
          IveBin2: false,
          TicTacToe: false,
          ReddClone: false
        }));
        break;
      case 'IveBin':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: !prevState.IveBin,
          IveBin2: false,
          TicTacToe: false,
          ReddClone: false
        }));
        break;
      case 'IveBin2':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          IveBin2: !prevState.IveBin2,
          TicTacToe: false,
          ReddClone: false
        }));
        break;
      case 'MisterKat':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          IveBin2: false,
          MisterKat: !prevState.MisterKat,
          ReddClone: false
        }));
        break;
      default:
         this.setState((prevState) => ({
          gallery: prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          IveBin2: false,
          TicTacToe: false,
          ReddClone: false
        }));
        break;
    }
  }

  render () {
    // console.log(this.state);
    return (
      <div className="Projects">
        {(this.state.gallery === true)
          ? <ProjectsGallery handleClick={this.handleClick} />
          :
            <div className="ProjectDisplay fade-in one">
              {(this.state.SteveFighter === true) ? <SteveFighter test='Steve Fighter' handleClick={this.handleClick} /> : null}
              {(this.state.IveBin === true) ? <IveBin handleClick={this.handleClick} /> : null}
              {(this.state.IveBin2 === true) ? <IveBin2 handleClick={this.handleClick} /> : null}
              {(this.state.MisterKat === true) ? <MisterKat handleClick={this.handleClick} /> : null}
              {(this.state.ReddClone === true) ? <ReddClone handleClick={this.handleClick} /> : null}
            </div>}
      </div>
    )
  }
}
