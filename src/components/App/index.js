import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleRefineSearch } from '../../redux/redux';
import { AppWrapper, RefineSearch } from './styles';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Button from '../Button';
import Search from '../Search';
import Filter from '../Filter';

const URL = 'https://app.joindrover.com/api/web/vehicles';

class App extends Component {
  state = {
    results: {},
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
  }

  componentDidMount = () => {
    const { query } = this.state;

    this.fetchData(query);
  }

  toggle = () => {
    const { query } = this.state;
    const { toggleRefineSearch, isRefineSearch } = this.props;

    if (isRefineSearch) {
      this.fetchData(query);
    }

    toggleRefineSearch(!isRefineSearch);
  }

  fetchData = () => {
    const { query } = this.state;
    // eslint-disable-next-line no-undef
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(query),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        results: data,
      }));
  }

  handleChange = (event, callback) => {
    const { query } = this.state;
    const { name, value } = event.target;

    this.setState({
      query: {
        ...query,
        [name]: parseInt(value, 10) || value,
      },
    }, callback);
  }

  render() {
    const { query, results } = this.state;
    const { isRefineSearch } = this.props;
    const buttonText = isRefineSearch ? 'Update search and hide filter'
      : 'Refine your search';

    return (
      <AppWrapper>
        <Navbar />
        <Banner />
        <Filter
          toggle={this.toggle}
          handleChange={this.handleChange}
          hide={!isRefineSearch}
          vehicleType={query.vehicle_type}
          location={query.location}
          start={query.subscription_start_days}
          distance={query.max_distance}
          price={query.price_max}
          vehicleMake={query.vehicle_make}
          transmission={query.transmission}
          seats={query.number_of_seats_min}
          year={query.year}
          fuel={query.fuel}
          bodyType={query.body_type}
        />
        <Search
          data={results.data}
          userParams={query}
          handleChange={this.handleChange}
          fetchData={this.fetchData}
          metadata={results.metadata}
          total={results.metadata ? results.metadata.total_count : 0}
          page={results.metadata ? results.metadata.page : 0}
          perPage={results.metadata ? results.metadata.per_page : 0}
          hide={isRefineSearch}
        />
        <RefineSearch>
          <Button onClick={this.toggle}>{buttonText}</Button>
        </RefineSearch>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRefineSearch: (boolean) => {
      dispatch(toggleRefineSearch(boolean));
    },
  };
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);
