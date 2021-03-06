import React, {Component} from 'react';
import CategoryList from './CategoryList';
import LatestBooks from './LatestBooks';
import Comments from './Comments';

class SideBar extends Component {
  constructor(props) {
    super(props);
    
    this.filterBooks = this.filterBooks.bind(this);
  }
  
  render() {
    const { categories, comments, latest } = this.props;

    return (
      <div className='col-sm-3'>
        <CategoryList categories={ categories } filterBooks={this.filterBooks}/>
        <LatestBooks latest={ latest }/>
        <Comments comments={ comments} />
      </div>
    );
  }

  filterBooks(selected) {
    this.props.filterBooks(selected);
  }
  
}

export default SideBar;