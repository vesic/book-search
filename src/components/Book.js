import React, {Component} from 'react';

class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="thumbnail">
          <img src={`img/${book.path}`} alt="..." />
          <div className="caption">
            <h3>{ book.title.slice(0, 10) }</h3>
            <p>{ book.details.slice(0, 50) }</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;