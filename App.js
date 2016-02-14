import React, { Component } from 'react';
import DecisionMaker9000 from './components/DecisionMaker9000';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null,
      decisions: ['test'],
      selectedDecision: null,
    }
  }

  addDecision(decision) {
    let decisions = this.state.decisions;

    this.setState({
      decisions: [...decisions, decision]
    })
  }

  superSecretRandomizerFormula() {
    const decisions = this.state.decisions;
    const selectedDecision = decisions[Math.floor(Math.random() * decisions.length)];

    this.setState({
      selectedDecision: selectedDecision
    })
  }
  render() {
    return (
      <DecisionMaker9000
        decisions={this.state.decisions}
        selectedDecision={this.state.selectedDecision}
        addDecision={this.addDecision.bind(this)}
        randomizer={this.superSecretRandomizerFormula.bind(this)}
      />
    );
  }
}
