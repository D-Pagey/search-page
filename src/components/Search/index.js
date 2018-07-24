import React, { Component } from 'react';

import './index.css';
import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

const URL = 'https://app.joindrover.com/api/web/vehicles?vehicle_type=Consumer';

export default class Search extends Component {
  state = {
    results: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => this.setState({
        results: data,
      }));
  }

  render() {
    const { results } = this.state;

    return (
      <main className="search-container">
        <MainHeading count={results.metadata} />
        <SliderBlock submit={this.fetchData} />
        <VehicleList results={results} />
        <Pagination />
        <NoVehicles />
      </main>
    );
  }
}

// search query in state, empty object
// updates keys in object
// key prop in array
// component button
// in state have isRefineSearch showing ? <User Inputs /> : <Search />
