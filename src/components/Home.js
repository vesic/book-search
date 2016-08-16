import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import BookList from './BookList';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar />
        <div className='row'>
          <SideBar />
          <BookList />
        </div>
      </div>
    );
  }
}

export default Home;