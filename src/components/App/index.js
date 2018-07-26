import React, { Component } from 'react';

import './index.css';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Button from '../Button';
import Search from '../Search';
import Filter from '../Filter';

export default class App extends Component {
  state = {
    isRefineSearch: false,
    query: {
      vehicle_type: 'Consumer',
      location: '',
      subscription_start_days: 14,
      max_distance: 50,
      price_max: 500,
      vehicle_make: undefined,
      transmission: undefined,
      year: undefined,
      fuel: undefined,
      sub_type: undefined,
      body_type: undefined,
      rental_option: 'commitment',
      number_of_weeks: 12,
      number_of_months: 12,
      number_of_seats_min: undefined,
      page: 1,
    },
  }

  toggleRefineSearch = () => {
    const { isRefineSearch } = this.state;

    this.setState({ isRefineSearch: !isRefineSearch });
  }

  handleChange = (event) => {
    const { query } = this.state;
    const { name, value } = event.target;

    this.setState({
      query: {
        ...query,
        [name]: parseInt(value, 10) || value,
      },
    });
  }

  render() {
    const { isRefineSearch, query } = this.state;
    const buttonText = isRefineSearch ? 'Update search and hide filter' : 'Refine your search';

    return (
      <div className="app">
        <Navbar />
        <Banner />
        {isRefineSearch
          ? (
            <Filter
              toggle={this.toggleRefineSearch}
              handleChange={this.handleChange}
              defaultValue={query}
            />
          )
          : <Search userParams={query} handleChange={this.handleChange} />}
        <div className="refine-search-div">
          <Button onClick={this.toggleRefineSearch}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}
