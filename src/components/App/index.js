import React, { Component } from 'react';

import './index.css';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Button from '../Button';
import Search from '../Search';
import Filter from '../Filter';

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
      tags: undefined,
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
      <div className="app">
        <Navbar />
        <Banner />
        <Filter
          toggle={this.toggleRefineSearch}
          handleChange={this.handleChange}
          defaultValue={query}
          className={isRefineSearch ? 'filter-container' : 'hide'}
        />
        <Search
          results={results}
          userParams={query}
          handleChange={this.handleChange}
          fetchData={this.fetchData}
          metadata={results.metadata}
          className={isRefineSearch ? 'hide' : 'search-container'}
        />
        <div className="refine-search-div">
          <Button onClick={this.toggleRefineSearch}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}

/**
 * Render both. Hide/show classes.
 * <div className=`filter ${isRefineSearch ? 'show' : 'hide'}`>
 *  <Filter className="filter"/>
 * </div>
 * <div className={isRefineSearch ? 'hide' : 'show'}>
 *  <Search className="search"/>
 * </div>
 */
