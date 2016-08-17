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

          // let comments = 
        });
      })

    this.getCategories()
      .then((response) => {
          this.setState({ categories: response.data });
        })

    this.getComments()
      .then((response) => {
        this.setState({ comments: _.take(response.data, 5) });
      }) 
  }

  getBooks() {
    return axios.get('https://polar-plateau-36502.herokuapp.com/books');
  }

  getCategories() {
    return axios.get('https://polar-plateau-36502.herokuapp.com/books/categories');
  }

  getComments() {
    return axios.get('https://polar-plateau-36502.herokuapp.com/books/comments');
  }

  render() {
    return (
      <div className='container'>
        <SearchBar searchForBooks={ this.searchForBooks }/>
        <div className='row'>
          <SideBar 
            categories={ this.state.categories }
            filterBooks={ this.filterBooks }
            latest={ this.state.latest } 
            comments={ this.state.comments } />
          <BookList books={this.state.books}/>
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