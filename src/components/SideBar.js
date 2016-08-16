import React, {Component} from 'react';
import CategoryList from './CategoryList';
import LatestBooks from './LatestBooks';
import Comments from './Comments';

class SideBar extends Component {
  render() {
    return (
      <div className='col-sm-3'>
        <CategoryList />
        <LatestBooks />
        <Comments />
      </div>
    );
  }
}

export default SideBar;