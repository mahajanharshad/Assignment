import React from 'react';
import './Filter.scss';

class Filters extends React.Component {
  render() {
    return (
      <div className="filterform">
        <form>
          <section className="price-section">
            <label className="title">Price Range</label>
            <div className="form-group">
              <label for="pmin-rice">Minimum Price</label>
              <input type="number" className="form-control" id="min-price" />
            </div>
            <div className="form-group">
              <label for="max-price">Maximum Price</label>
              <input type="number" className="form-control" id="max-price" />
            </div>
          </section>

          <section className="booking-class">
            <label className="title">Booking Class</label>
            <div className="form-group">
              <input type="checkbox" id="economy" name="economy" />
              <label for="economy">Economy(199)</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="firstclass" name="firstclass" />
              <label for="firstclass">First Class</label>
            </div>
          </section>


          <div className="form-group">
            <button type="button" className="btn btn-default">Reset all</button>
            <button type="button" className="btn btn-primary" onClick={this.onClick}>Search Flights</button>
          </div>
        </form>
      </div>
    );
  }

  onClick = e => {
    e.preventDefault();
    this.props.history.goBack();
  };
}

export default Filters;
