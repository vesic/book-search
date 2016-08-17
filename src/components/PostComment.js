import React, {Component} from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

class PostComment extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      body: ''
    }

    this.onCommentSubmit = this.onCommentSubmit.bind(this);

  }
  
  render() {
    const { book } = this.props;

    return (
      <div className=''>
        <h3>Comment for { book.title }</h3>
        <form onSubmit={ this.onCommentSubmit }>
          <div className="form-group">
            <label htmlFor="title">Comment title</label>
            <input 
              value={this.state.title}
              onChange={(e) => { this.setState({ title: e.target.value }) }}
              className="form-control" id="title" placeholder="Title" />
          </div>

          <div className="form-group">
            <label htmlFor="body">Comment body</label>
            <textarea 
              value={this.state.body}
              onChange={(e) => { this.setState({ body: e.target.value }) }}
              className="form-control" id="title" placeholder="Body" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onCommentSubmit(e) {
    e.preventDefault();
    // axios.post('http://localhost:3333/books/comments', {
    axios.post('https://polar-plateau-36502.herokuapp.com/books/comments', {
        title: this.state.title,
        body: this.state.body,
        bookId: this.props.book._id
      })
      .then((res) => {
        console.log(res);
        hashHistory.push('/');
      })
  }

}

export default PostComment;