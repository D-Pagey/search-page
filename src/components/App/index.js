import React, { Component } from 'react';

import './index.css';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Button from '../Button';
import Search from '../Search';
import Filter from '../Filter';
import Footer from '../Footer';

export default class App extends Component {
  state = {
    isRefineSearch: false,
    // This is the start of taking users params into fetch request
    // I'll convert the json object to a query string
    // Fix filter defaultValues
    query: {
      vehicle_type: 'Consumer',
      location: '',
      subscription_start_days: undefined,
      max_distance: undefined,
      price_max: undefined,
      vehicle_make: undefined,
      transmission: undefined,
      year: undefined,
      fuel: undefined,
      sub_type: undefined,
      body_type: undefined,
    },
  }

  toggleRefineSearch = () => {
    const { isRefineSearch } = this.state;

    this.setState({ isRefineSearch: !isRefineSearch });
  }

  handleChange = (event) => {
    const { query } = this.state;

    this.setState({
      query: {
        ...query,
        [event.target.name]: event.target.value,
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
          : <Search userParams={query} />}
        <Footer />
        <div className="refine-search-div">
          <Button onClick={this.toggleRefineSearch}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}
