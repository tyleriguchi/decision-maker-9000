import React, { Component } from 'react';
import Decision from '../components/DecisionComponent';

export default class DecisionList extends Component {
  render() {
    return (
      <div>
        <h2>Decisions</h2>
        {this.props.decisions.map( (decision, index) =>
          <Decision
            key={index}
            decision={decision}
            removeDecision={this.props.removeDecision}
          />
        )}
      </div>
    )
  }
}
