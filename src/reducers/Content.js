let initialState = {
  actualData: [{
    title: 'test',
    imgURL: '',
    flightDetails: [{
        arrTime: 'test',
        arrLoc: 'test',
        reachTime: 'test',
        reachLoc: 'test',
        travelDist: 'test',
        stops: 'test'
    }],
    priceDetails: [{
      price: 'test',
      classDetails: 'test',
      seatsAvialability: 'test'
    }]
  }]
}

export default (state = initialState, action) => {
    return state
};
