import React from 'react';
import './Sort.scss';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sorttems: [{ key: 'priceLH', value: 'Price (Lowest to Highest)' },
        { key: 'priceHL', value: 'Price (Highest to Lowest)' },
        { key: 'durationSL', value: 'Duration (shortest to Longest)' },
        { key: 'durationLS', value: 'Duration (Longest to shortest)' },
        { key: 'departureEL', value: 'Departure (Earlirst to Latest)' },
        { key: 'departureET', value: 'Arrival (Earlirst to Latest)' },
        { key: 'airlineAZ', value: 'Airline (A to Z)' },
        { key: 'airlineZA', value: 'Airline (Z to A)' }],
        selectedRadioButton: ''
    }
}

render() {
    return (
        <div className="sort">
            <div className="container">
                {
                    this.state.sorttems.map((data, index) => {
                        return (
                            <div className="radio" key={index}>
                                <label><input type="radio" name={data.key} checked={this.state.selectedRadioButton === data.key} onChange={this.handleChange}/>{data.value}</label>
                            </div>
                        )
                    })
                }
                <button type="button" className="btn btn-primary" onClick={this.onClick}>Done</button>
            </div>
        </div>
    );
}

onClick = e => {
    e.preventDefault();
    this.props.history.goBack();
};

handleChange = (e) => {
    this.setState({
        selectedRadioButton: e.target.name
    })
}

}

export default Sort;
