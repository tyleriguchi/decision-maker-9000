import React, { Component } from 'react';

export default class DecisionMaker extends Component {

  handleClick() {
    this.props.addDecision(Math.random());
  }

  randomize() {
    this.props.randomizer();
  }
  render() {
    return (
      <div>
        {this.props.decisions}
        <button onClick={this.handleClick.bind(this)}>BUTTON</button>
        <button onClick={this.randomize.bind(this)}>Randomize</button>
        {this.props.selectedDecision}
      </div>
    )
  }
}
