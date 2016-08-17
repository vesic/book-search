import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: ''
    }

    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="input-group">
            <input 
              onChange={this.onChangeSearchTerm}
              value={this.state.searchTerm} className="form-control" placeholder="Book title..." />
            <span className="input-group-btn">
              <button 
                onClick={ this.onSearch }
                className="btn btn-primary">Search!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }

  onChangeSearchTerm(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearch() {
    this.props.searchForBooks(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

}

export default SearchBar;