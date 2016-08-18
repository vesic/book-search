import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      categories: ['javascript', 'express', 'mongo', 'react', 'angular'],
      selected: ''
    }

    this.setSelectedCategory = this.setSelectedCategory.bind(this);
  }

  setSelectedCategory(selected) {
    console.log(selected);
    this.setState({ selected });
    this.props.filterBooks(selected);
  }
  
  render() {
    if (this.state.categories === 0) {
      return (
        <div className='text-center'>
          <h3>Loading...</h3>
        </div>
      )
    }

    return (
      <div className=''>
        <h4 style={{ borderBottom: '3px solid' }} className=''>{ _.toUpper('Categories') }</h4>
          <ul className="nav nav-pills nav-stacked">
          {
            _.map( this.state.categories, (single, index) => 
              <li key={ index } 
                onClick={ this.setSelectedCategory.bind(null, single) }
                role="presentation" className={ this.state.selected === single ? 'active' : '' } ><a onClick={ e => e.preventDefault() } href="#">{ _.toUpper(single) }</a></li>
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