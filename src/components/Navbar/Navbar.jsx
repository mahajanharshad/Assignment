import React, { Component } from 'react';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>       
        <p>
          Navbar
        </p>
      </div>
    );
  }
}

export default Navbar;
