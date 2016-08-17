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
            <li><Link to='/new'>Add Book</Link></li>
            <li><Link to='/'>About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;