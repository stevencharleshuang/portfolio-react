import React, { Component } from 'react';
import SteveFighter from './projects/SteveFighter';
import IveBin from './projects/IveBin';
import SearchWoo from './projects/SearchWoo';
import TicTacToe from './projects/TicTacToe';
import ProjectsGallery from './ProjectsGallery';

export default class Projects extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gallery: true,
      SteveFighter: false,
      IveBin: false,
      SearchWoo: false,
      TicTacToe: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('handleClick! e: ', e.target);
    switch (e.target.dataset.id) {
      case 'SteveFighter':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: !prevState.SteveFighter,
          IveBin: false,
          SearchWoo: false,
          TicTacToe: false,
        }));
        break;
      case 'IveBin':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: !prevState.IveBin,
          SearchWoo: false,
          TicTacToe: false,
        }));
        break;
      case 'SearchWoo':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          SearchWoo: !prevState.SearchWoo,
          TicTacToe: false,
        }));
        break;
      case 'TicTacToe':
        this.setState((prevState) => ({
          gallery: !prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          SearchWoo: false,
          TicTacToe: !prevState.TicTacToe,
        }));
        break;
      default:
         this.setState((prevState) => ({
          gallery: prevState.gallery,
          SteveFighter: false,
          IveBin: false,
          SearchWoo: false,
          TicTacToe: false,
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
              {(this.state.SearchWoo === true) ? <SearchWoo handleClick={this.handleClick} /> : null}
              {(this.state.TicTacToe === true) ? <TicTacToe handleClick={this.handleClick} /> : null}
            </div>}
      </div>
    )
  }
}
