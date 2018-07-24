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
    query: {
      location: '',
      start: '',
      distance: '',
      budget: '',
      gearbox: '',
      year: '',
      fuel: '',
    },
  }

  toggleRefineSearch = () => {
    const { isRefineSearch } = this.state;

    this.setState({ isRefineSearch: !isRefineSearch });
  }

  render() {
    const { isRefineSearch } = this.state;
    const buttonText = isRefineSearch ? 'Update search and hide filter' : 'Refine your search';

    return (
      <div className="app">
        <Navbar />
        <Banner />
        {isRefineSearch ? <Filter toggle={this.toggleRefineSearch} /> : <Search />}
        <Footer />
        <div className="refine-search-div">
          <Button onClick={this.toggleRefineSearch}>{buttonText}</Button>
        </div>
      </div>
    );
  }
}

// refine search here
// json object to query string
