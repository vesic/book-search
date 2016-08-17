import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Book Search</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li><Link to='/new'>Add Book</Link></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li> 
            <li><a href="#">Page 3</a></li> 
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;