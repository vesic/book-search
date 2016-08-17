import React, {Component} from 'react';
import _ from 'lodash';

class Comments extends Component {
  render() {
    const comments = _.map(this.props.comments, (comment) => {
      return (
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">{ comment.title }</h4>
          <p className="list-group-item-text">{ comment.body }</p>
        </a>
      )
    })

    return (
      <div className=''>
        <h3 className='text-center'>Comments</h3>
        <div className="list-group">
          { comments }
        </div>
      </div>
    );
  }
}

export default Comments;