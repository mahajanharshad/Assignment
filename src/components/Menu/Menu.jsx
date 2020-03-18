import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hotels" className="nav-link">
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cars" className="nav-link">
                Cars
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
