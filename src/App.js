import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div>Works!</div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
