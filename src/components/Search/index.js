import React, { Component } from 'react';
import { objectOf, any, func } from 'prop-types';

import './index.css';
import MainHeading from './MainHeading';
import SliderBlock from './SliderBlock';
import VehicleList from './VehicleList';
import Pagination from './Pagination';
import NoVehicles from './NoVehicles';

const URL = 'https://app.joindrover.com/api/web/vehicles';

export default class Search extends Component {
  static propTypes = {
    handleChange: func.isRequired,
    userParams: objectOf(any).isRequired,
  }

  state = {
    results: {},
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { userParams } = this.props;
    // eslint-disable-next-line no-undef
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
    const { handleChange, userParams } = this.props;

    return (
      <main className="search-container">
        <MainHeading count={results.metadata} />
        <SliderBlock
          submit={this.fetchData}
          handleChange={handleChange}
          userParams={userParams}
        />
        <VehicleList results={results} userParams={userParams} />
        <Pagination
          handleChange={handleChange}
          userParams={userParams}
          totalCount={results.metadata}
        />
        <NoVehicles />
      </main>
    );
  }
}
