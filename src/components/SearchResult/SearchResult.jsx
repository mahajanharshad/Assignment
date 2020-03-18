import React from 'react';
import './SearchResult.scss';
import { Link } from 'react-router-dom';
import { HOME_PAGE_UNLOADED } from '../../constants/actionTypes';
import { connect } from 'react-redux';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.flightData.details
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  
  render() {
    console.log(this.props.flightData);

    return (
      <div className="details-section">
        <div className="container">
          {this.state.details.map((data, index) => {
            return (
              <section className="details-container" key={index}>
                <div className="title"><i className="fa fa-snowflake-o" aria-hidden="true"></i> {data.title}</div>
                {
                  data.flightDetails.map((flighData, index) => {
                    return this.getFlightDetails(flighData, index)
                  })
                }
                {
                  data.priceSection.map((priceDetails, index2) => {
                    return this.getpriceDetails(priceDetails, index2)
                  })
                }
                <div className="buttonContainer">
                  <div>
                    <Link to="/Sort" className="nav-link">
                      <span>Sort</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="/Filters" className="nav-link">
                      <span>Filters</span>
                    </Link>
                  </div>
                </div>
              </section>)
          })}
        </div>
      </div>
    );
  }

  getpriceDetails = (priceDetails, index) => {
    return (
      <ul key={index}>
        <li>
          <div className="priceSection">
            <span className="price">{priceDetails.price}</span>
            <span className="class-details">{priceDetails.class}</span>
            {priceDetails.seatsAvailability && <span className="seats-availability">{priceDetails.seatsAvailability} seats left</span>}
          </div>
        </li>
      </ul>
    )
  }

  getFlightDetails = (flighData, index2) => {
    return (
      <div className="flight-details" key={index2}>
        <div className="flight-details__left-section">
          <span>{flighData.arrivalTime}</span>
          <span>{flighData.arrivalLoc}</span>
        </div>
        <div className="flight-details__middle-section">
          <span>{flighData.travelDistance}</span>
          <span>{flighData.noOfStop} Stop(ADD)</span>
        </div>
        <div className="flight-details__last-section">
          <span>{flighData.reachingTime}</span>
          <span>{flighData.dest}</span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ 
    onUnload: () => dispatch({  type: HOME_PAGE_UNLOADED }) 
  })

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
