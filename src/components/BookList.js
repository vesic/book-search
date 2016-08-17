import React, {Component, PropTypes} from 'react';
import Book from './Book';
import _ from 'lodash';

class BookList extends Component {
  render() {
    const { books } = this.props;
    const bookList = _.map(books, (book) => 
      <Book key={ book._id } book={book} />)

    if (books.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div className='col-sm-9'>
        { bookList }
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;