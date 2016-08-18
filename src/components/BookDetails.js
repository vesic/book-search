import React, {Component} from 'react';
import axios from 'axios';
import PostComment from './PostComment';
import _ from 'lodash';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      book: {},
      comments: [],
      commentFormVisible: false
    }

    this.getBook = this.getBook.bind(this);
    this.getComments = this.getComments.bind(this);
  }
  
  componentDidMount() {
    let id = this.props.params.id;

    axios.all([this.getBook(id), this.getComments()])
      .then(axios.spread((book, comments) => {
        this.setState({ book: book.data })
        this.setState({
          comments: _.filter(comments.data, comment => comment.bookId === this.state.book._id)
        })
      }));
  }
  
  render() {
    const comments = _.map(this.state.comments, comment => {
      return (
        <a 
          style={ { marginBottom: 10 } }
          key={ comment._id } href="#" className="list-group-item">
          <h4 className="list-group-item-heading"><strong>{ comment.title }</strong></h4>
          <p className="list-group-item-text">{ comment.body }</p>
        </a>
      )
    })
    return (
      <div className='container'>
        <div className="col-md-6">
          <h3>Title: { this.state.book.title }</h3>
          <h4>Author: { this.state.book.author }</h4>
          <div className="thumbnail">
            <img src={this.state.book.path} alt="..." />
            <div className="caption">
              <h4>Details</h4>
              <p className=''>{ this.state.book.details }</p>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <h3 style={{
            borderBottom: '3px solid'
          }}>Comments</h3>
          <div className="list-group text-left">
            { comments }
            <button 
              style={{ marginTop: 10 }}
              onClick={() => this.setState({ commentFormVisible: !this.state.commentFormVisible })}
              className="btn btn-primary">
                { this.state.commentFormVisible ? 'Close Window' : 'Show Comment Window'  }
              </button>
          </div>
          {this.commentForm()}
        </div>
      </div>
    );
  }

  getBook(id) {
    return axios.get(`https://polar-plateau-36502.herokuapp.com/books/${id}`);
    // return axios.get(`http://localhost:3333/books/${id}`);
  }

  getComments() {
    return axios.get('https://polar-plateau-36502.herokuapp.com/books/comments');
    // return axios.get('http://localhost:3333/books/comments');
  // }
  }

  commentForm() {
    if (!this.state.commentFormVisible) {
      return null;
    }

    return (
      <PostComment book={this.state.book}/>
    )
  }

}

export default BookDetails;