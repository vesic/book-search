import React, {Component} from 'react';
import _ from 'lodash';

class Comments extends Component {
  render() {
    const comments = _.map(this.props.comments, (comment) => {
      return (
        <a key={ comment._id } href="#" className="list-group-item">
          <h4 className="list-group-item-heading">{ comment.title }</h4>
          <p className="list-group-item-text">{ comment.body }</p>
        </a>
      )
    })

    return (
      <div className=''>
        <h4 style={{ borderBottom: '3px solid' }}>{ _.toUpper('Latest Comments') }</h4>
        <div className="list-group">
          { comments }
        </div>
      </div>
    );
  }
}

export default Comments;