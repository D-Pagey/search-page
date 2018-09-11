import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppWrapper, RefineSearch } from './styles';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Button from '../Button';
import Search from '../Search';
import Filter from '../Filter';

const URL = 'https://app.joindrover.com/api/web/vehicles';

export class App extends Component {
  state = {
    isRefineSearch: false,
    results: {},
  }

  componentDidMount = () => {
    const { query } = this.props;

    this.fetchData(query);
  }

  toggle = () => {
    const { isRefineSearch } = this.state;
    const { query } = this.props;

    if (isRefineSearch) {
      this.fetchData(query);
    }

    this.setState(prevState => ({
      isRefineSearch: !prevState.isRefineSearch,
    }));
  }

  fetchData = () => {
    const { query } = this.props;
    // eslint-disable-next-line no-undef
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(query),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => this.setState({ // dispatch to props here?
        results: data,
      }));
  }

  handleChange = (event, callback) => {
    const { query } = this.props;
    const { name, value } = event.target;

    this.setState({
      query: {
        ...query,
        [name]: parseInt(value, 10) || value,
      },
    }, callback);
  }

  render() {
    const { results, isRefineSearch } = this.state;
    const { query } = this.props;

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

const mapStateToProps = ({ query }) => ({ query });

// const mapDispatchToProps = dispatch => {
//   return {
//     test: 12,
//   }
// }

export const Container = connect(mapStateToProps)(App);

// SQUASH COMMIT LATER