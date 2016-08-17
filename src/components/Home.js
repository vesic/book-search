import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import BookList from './BookList';
import axios from 'axios';
import _ from 'lodash';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      books: [],
      categories: [],
      filteredBooks: null,
      latest: []
    }

    this.filterBooks = this.filterBooks.bind(this);
  }
  
  componentDidMount() {
    axios.get('https://polar-plateau-36502.herokuapp.com/books')
      .then((response) => {
        this.setState({ books: response.data }, () => {
          let latest = _.take(
                        _.reverse(
                          _.sortBy(response.data, (single) => single.date))
                            , 6);
          this.setState({ latest });
        });
      })
    
    axios.get('https://polar-plateau-36502.herokuapp.com/books/categories')
      .then((response) => {
        this.setState({ categories: response.data });
      })
}

  render() {
    return (
      <div className='container'>
        <SearchBar />
        <div className='row'>
          <SideBar 
            categories={ this.state.categories }
            filterBooks={ this.filterBooks }
            latest={ this.state.latest } />
          <BookList books={this.state.filteredBooks == null ? this.state.books : this.state.filteredBooks}/>
        </div>
      </div>
    );
  }

  filterBooks(selected) {
    this.setState({
      filteredBooks: _.filter(this.state.books, book => book.category === selected)
    });
  }
}

export default Home;