const SPECIFIC_SEARCH = 'SPECIFIC_SEARCH';

/**
 * ACTION CREATORS
 */
export const queryParams = (params) => {
  return { 
    type: SPECIFIC_SEARCH,
    payload: params,
  }
}

/**
 * Reducer
 */
const initialState = {
  query: {
    body_type: undefined,
    fuel: undefined,
    location: 'London',
    max_distance: 9999,
    number_of_months: 12,
    number_of_seats_min: undefined,
    number_of_weeks: 12,
    page: 1,
    price_max: 2500,
    rental_option: 'commitment',
    subscription_start_days: 30,
    sub_type: undefined,
    transmission: undefined,
    vehicle_make: undefined,
    vehicle_type: 'Consumer',
    year: undefined,
  },
};

export const queryParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIFIC_SEARCH:
      return Object.assign({}, state, {
        query: action.payload
      })
    default:
      return state;
  }
};

export const mapStateToProps = (state) => {
  return { query: state.query };
};

export const mapDispatchToProps = dispatch => {
  return {
    test: 12,
  }
}
