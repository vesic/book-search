import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      categories: [],
      selected: ''
    }

    this.setSelectedCategory = this.setSelectedCategory.bind(this);
  }
  
  componentDidMount() {
    // this.state.categories = _.map(this.props.books, )
  }

  setSelectedCategory(selected) {
    console.log(selected);
    this.setState({ selected });
    this.props.filterBooks(selected);
  }
  
  render() {
    const categories = this.props.categories;

    if (categories.length === 0) {
      return (
        <div className='text-center'>
          <h3>Loading...</h3>
        </div>
      )
    }

    return (
      <div className=''>
        <h4 className='text-center'>{ _.toUpper('Categories') }</h4>
          <ul className="nav nav-pills nav-stacked">
          {
            _.map( categories, (single, index) => 
              <li key={ index } 
                onClick={ this.setSelectedCategory.bind(null, single.category) }
                role="presentation" className={ this.state.selected === single.category ? 'active' : '' } ><a href="#">{ single.category }</a></li>
            )
          }
          </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoryList;