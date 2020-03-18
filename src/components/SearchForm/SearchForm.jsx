import React from 'react';
import './SearchForm.scss';

class SearchForm extends React.Component {
  render() {
    return (
      <div className="sampleform">
        <form>
          <div className="form-group">
            <label for="departure">Departure</label>
            <input type="text" className="form-control" list="cities" id="departure" />
            <datalist id="cities">
              <option value="Pune" />
              <option value="Mumbai" />
              <option value="Delhi" />
            </datalist>
          </div>
          <div className="form-group">
            <label for="destination">Destination</label>
            <input type="text" list="destcities" className="form-control" id="destination" />
            <datalist id="destcities">
              <option value="Chennai" />
              <option value="Kolkata" />
              <option value="Banglore" />
            </datalist>
          </div>
          <div className="form-group form-group-mini">
            <label for="departdate">Depart Date</label>
            <input type="date" className="form-control" id="departdate" />
          </div>
          <div className="form-group form-group-mini">
            <label for="returndate">Return Date</label>
            <input type="date" className="form-control" id="returndate" />
          </div>
          <div className="form-group form-group-mini">
            <label for="travelers">Travelers</label>
            <input type="number" className="form-control" id="travelers" />
          </div>
          <div className="form-group form-group-mini">
            <label for="class">Class</label>
            <input type="text" list="classDetails" className="form-control" id="class" />
            <datalist id="classDetails">
              <option value="Basic" />
              <option value="Economy" />
              <option value="main" />
            </datalist>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={this.props.clickHandler}>Search Flights</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
