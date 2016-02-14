import React, { Component } from 'react';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  submit(e) {
    e.preventDefault();
    
    if (this.state.text) {
      this.props.submitValue(this.state.text);
    }

    this.setState({
      text: ''
    });
  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input
          onChange={this.onChange.bind(this)}
          onBlur={this.submit.bind(this)}
          value={this.state.text}
        />
        <button onClick={this.submit.bind(this)}>+</button>
      </form>
    )
  }
}
