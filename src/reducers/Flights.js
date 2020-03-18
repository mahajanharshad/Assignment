let initialState = {
    details: [{
        title: 'Ethopian airlines',
        flightDetails: [{
          arrivalTime: '02:30 am',
          arrivalLoc: 'DEL',
          reachingTime: '04:50pm',
          dest: 'CPT',
          travelDistance: '14 hr 20 m',
          noOfStop: 1
        }],
        priceSection: [{
          price: '$125',
          class: 'Basic Economy',
          seatsAvailability: 0
        }, {
          price: '$125',
          class: 'Basic Economy',
          seatsAvailability: 0
        }, {
          price: '$95',
          class: 'Basic Economy',
          seatsAvailability: 3
        }
        ]
      },
      {
        title: 'Ethopian airlines',
        flightDetails: [{
          arrivalTime: '02:30 am',
          arrivalLoc: 'DEL',
          reachingTime: '04:50pm',
          dest: 'CPT',
          travelDistance: '14 hr 20 m',
          noOfStop: 1
        }],
        priceSection: [{
          price: '$125',
          class: 'Basic Economy',
          seatsAvailability: 0
        }, {
          price: '$65',
          class: 'Basic Economy',
          seatsAvailability: 3
        }, {
          price: '$80',
          class: 'Basic Economy',
          seatsAvailability: 0
        }
        ]
      }]
}

export default (state = initialState, action) => {
    return state
};
