import React, {Component} from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';

class NewBook extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title:'',
      author: '',
      details: '',
      category: 'javascript'
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  
  render() {
    return (
      <div className='container'>

        <div className='col-md-10 col-md-offset-1'>
          <h1 style={{
            borderBottom: '3px solid'
          }}>New book!</h1>
          <form onSubmit={ this.onSubmit } encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="title">Book title</label>
              <input value={this.state.title} 
                onChange={ (e) => {this.setState({ title: e.target.value }) }}
                className="form-control" id="title" placeholder="Title" />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input value={this.state.author} 
                onChange={ (e) => {this.setState({ author: e.target.value }) }}
                className="form-control" id="author" placeholder="Author" />
            </div>

            <div className="form-group">
              <label htmlFor="author">Details</label>
              <textarea value={this.state.details} 
                onChange={ (e) => {this.setState({ details: e.target.value }) }}
                className="form-control" id="details" placeholder="Details" />
            </div>

            <div className='form-group'>
              <label htmlFor="category">Category</label>
              <select 
                  onChange={(e) => { this.setState({ category: e.target.value }) }}
                  value={ this.state.category } className="form-control" id='category'>
                <option value='javascript'>Javascript</option>
                <option value='express'>Express</option>
                <option value='mongo'>Mongo</option>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Book Image</label>
              <input ref="image" type="file" id="image" name='image'/>
              <p className="help-block">Choose cover image</p>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('title', this.state.title);
    data.append('author', this.state.author);
    data.append('details', this.state.details);
    data.append('category', this.state.category);
    data.append('file', this.refs.image.files[0]);
    axios.post('https://polar-plateau-36502.herokuapp.com/books/new', data)
    // axios.post('http://localhost:3333/books/new', data)
      .then(res => {
        if (res.status === 201) {
          hashHistory.push('/')
        }
      })
  }
}

export default NewBook;