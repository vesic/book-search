import React, {Component} from 'react';
import Book from './Book';
import _ from 'lodash';
import axios from 'axios';

class BookList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      msg: 'Book List',
      books: []
    }
  }
  
  componentDidMount() {
    axios.get('https://polar-plateau-36502.herokuapp.com/books')
      .then((response) => {
        this.setState({ books: response.data });
      })
  }
  
  render() {
    const books = _.map(this.state.books, (book) => 
      <Book key={ book._id } book={book} />)

    if (this.state.books.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div className='col-sm-9'>
        <h1>{ this.state.msg }</h1>
        { books }
      </div>
    );
  }
}

export default BookList;