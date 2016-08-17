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
    this.searchForBooks = this.searchForBooks.bind(this);
  }
  
  componentDidMount() {
    this.getBooks()
      .then((response) => {
        this.setState({ books: response.data }, () => {
          let latest = _.take(
                        _.reverse(
                          _.sortBy(response.data, (single) => single.date))
                            , 6);
          this.setState({ latest });
        });
      })

    this.getCategories()
      .then((response) => {
          this.setState({ categories: response.data });
        })
  }

  getBooks() {
    return axios.get('https://polar-plateau-36502.herokuapp.com/books');
  }

  getCategories() {
    return axios.get('https://polar-plateau-36502.herokuapp.com/books/categories');
  }

  render() {
    return (
      <div className='container'>
        <SearchBar searchForBooks={ this.searchForBooks }/>
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
    this.setState({books: []});
    this.getBooks()
      .then((response) => {
        this.setState({
          books: _.filter(response.data, book => book.category === selected)
        });
      })    
  }

  searchForBooks(term) {
    this.setState({books: []});
    this.getBooks()
      .then((response) => {
        this.setState({
          books: _.filter(response.data, (book) => _.startsWith(
            _.toLower(book.title), _.toLower(term)
          ))
        });
      })
  }

}

export default Home;