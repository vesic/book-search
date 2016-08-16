import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="input-group">
            <input className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-primary">Go!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;