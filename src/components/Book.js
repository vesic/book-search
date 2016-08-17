import React, {Component} from 'react';
import { Link } from 'react-router';

class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="thumbnail">
          <Link to={`books/${book._id}`} ><img src={book.path} alt=''/></Link>
          <div className="caption">
            <h4>{ book.title.slice(0, 10) }</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;