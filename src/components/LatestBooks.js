import React, {Component} from 'react';
import Book from './Book';

class LatestBooks extends Component {
  render() {
    return (
      <div className=''>
        <h3>LatestBooks</h3>
        <Book />
      </div>
    );
  }
}

export default LatestBooks;