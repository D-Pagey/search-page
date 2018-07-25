import React, { Component } from 'react';
import { objectOf, any } from 'prop-types';

import './index.css';
import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

const URL = 'https://app.joindrover.com/api/web/vehicles';

// I'll pass down user params to Search as props

export default class Search extends Component {
  static propTypes = {
    userParams: objectOf(any).isRequired,
  }

  state = {
    results: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { userParams } = this.props;
    console.log(userParams);
    // To Do: swap out native fetch for isomorphic or Axios
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(userParams),
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
