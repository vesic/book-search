import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class LatestBooks extends Component {
  render() {
    const latest = _.map(this.props.latest, (book, index) => {  
      return (
        <div key={ book._id } className="col-xs-6">
          <a href="#" className="thumbnail">
            <img src={book.path} alt=''/>
            <div className="caption">
              { book.title.slice(0, 7) }
            </div>
          </a>
        </div>
      )
    });
    return (
      <div className=''>
        <h4 style={{ borderBottom: '3px solid' }}>{ _.toUpper('latest books') }</h4>
        { latest }
      </div>
    );
  }
}

LatestBooks.propTypes = {
  latest: PropTypes.array.isRequired
}

export default LatestBooks;