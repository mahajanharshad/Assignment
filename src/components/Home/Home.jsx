import React, { Component } from 'react';

class Home extends Component {
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
          Home
        </p>
      </div>
    );
  }
}

export default Home;
