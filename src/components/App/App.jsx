import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Content from '../Content/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default connect(null, null)(App);