import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';
import { connect } from 'react-redux';

class Flights extends React.Component {
  constructor(props){
    super(props);

    this.state={
      showSearchResult: false
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          {!this.state.showSearchResult && <SearchForm clickHandler={this.clickHandler} /> }
          {this.state.showSearchResult && <SearchResult flightData = {this.props.Flights} /> }
        </div>
      </nav>
    );
  }

  clickHandler = () => {
    this.setState({
      showSearchResult: true
    })
  }
  
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, null)(Flights);

