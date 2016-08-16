import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <div className='col-sm-9'>
        <h1>BookList</h1>
        <Book />
      </div>
    );
  }
}

export default BookList;