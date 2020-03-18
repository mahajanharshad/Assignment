import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Content.scss';

class Content extends Component {
  render() {
    return (
      <nav className="navbar navbar-light menubar">
        <div className="container">
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/Flights" className="nav-link">
                <span><i className="fa fa-plane" aria-hidden="true"></i></span>
                <span>Flights</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hotels" className="nav-link">
                <span><i className="fa fa-building" aria-hidden="true"></i></span>
                <span>Hotels</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cars" className="nav-link">
                <span><i className="fa fa-car" aria-hidden="true"></i></span>
                <span>Cars</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Content;

