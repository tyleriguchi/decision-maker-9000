import React, { Component } from 'react';
import Input from '../components/InputComponent';
import Question from '../components/QuestionComponent';
import DecisionList from '../components/DecisionList';

export default class DecisionMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null,
      decisions: [],
      selectedDecision: null,
    }
  }

  addDecision(decision) {
    let decisions = this.state.decisions;

    this.setState({
      decisions: [...decisions, decision]
    })
  }

  addQuestion(question) {
    this.setState({
      question: question
    })
  }

  superSecretRandomizerFormula() {
    const decisions = this.state.decisions;
    const selectedDecision = decisions[Math.floor(Math.random() * decisions.length)];

    this.setState({
      selectedDecision: selectedDecision
    })
  }

  removeDecision(decision) {
    const decisions = this.state.decisions;
    const index = decisions.indexOf(decision);

    this.setState({
      decisions: decisions.slice(0, index).concat(decisions.slice(index, decisions.length - 1))
    })
  }

  render() {
    return (
      <div>
        <Question
          question={this.state.question}
          addQuestion={this.addQuestion.bind(this)}
        />
        <DecisionList
          decisions={this.state.decisions}
          removeDecision={this.removeDecision.bind(this)}
        />
        <Input
          submitValue={this.addDecision.bind(this)}
        />
        <button onClick={this.superSecretRandomizerFormula.bind(this)}>Randomize</button>
        <div>
          <span>You should {this.state.selectedDecision}</span>
        </div>
      </div>
    );
  }
}
