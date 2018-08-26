import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar';
import Banner from '../Banner';
import Button from '../Button';
import Search from '../Search';
import Filter from '../Filter';

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 40px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const RefineSearch = styled.div`
  align-items: center;
  background-color: #172B24;  
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 11px;
  position: fixed;
  width: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const URL = 'https://app.joindrover.com/api/web/vehicles';

export default class App extends Component {
  state = {
    isRefineSearch: false,
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

  toggleRefineSearch = () => {
    const { query, isRefineSearch } = this.state;

    if (isRefineSearch) {
      this.fetchData(query);
    }

    this.setState(prevState => ({
      isRefineSearch: !prevState.isRefineSearch,
    }));
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
    const { isRefineSearch, query, results } = this.state;
    const buttonText = isRefineSearch ? 'Update search and hide filter'
      : 'Refine your search';

    return (
      <AppWrapper>
        <Navbar />
        <Banner />
        <Filter
          toggle={this.toggleRefineSearch}
          handleChange={this.handleChange}
          className={isRefineSearch ? 'filter-container' : 'hide'}
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
          className={isRefineSearch ? 'hide' : 'search-container'}
        />
        <RefineSearch>
          <Button onClick={this.toggleRefineSearch}>{buttonText}</Button>
        </RefineSearch>
      </AppWrapper>
    );
  }
}
