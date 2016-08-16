import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar />
      </div>
    );
  }
}

export default Home;