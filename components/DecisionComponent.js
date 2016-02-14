import React, { Component } from 'react';

export default class DecisionComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseOver: false
    }
  }

  mouseEnter() {
    this.setState({
      mouseOver: true
    })
    console.log('mouse over')
  }

  mouseLeave() {
    console.log('leave')
    this.setState({
      mouseOver: false
    })
  }

  handleClick() {
    this.props.removeDecision(this.props.decision);
  }

  render() {
    if (this.state.mouseOver) {
      return (
        <div>
          <span onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
            {this.props.decision}
            <button onClick={this.handleClick.bind(this)}>X</button>
          </span>
        </div>
      )
    }
    return (
      <div onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
        {this.props.decision}
      </div>
    )
  }
}
