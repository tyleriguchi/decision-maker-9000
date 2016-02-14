import React, { Component } from 'react';
import Input from './InputComponent';

export default class QuestionComponent extends Component {

  render() {
    if (this.props.question) {
      return (<span>{this.props.question}</span>)
    }
    else {
      return (
        <div>
          <span>What do you need to decide?</span>
          <Input
          submitValue={this.props.addQuestion}
          />
        </div>
      )
    }
  }
}
