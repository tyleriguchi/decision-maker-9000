import React from 'react';
import App from './components/Garden';

export default React.createClass({
  getInitialState() {
    return {
      flowers: ['Lillies', 'Daisies', 'Tulips']
    }
  },

  render: function() {
    return (<Garden flowers={this.state.flowers}/>);
  }
})
