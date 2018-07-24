import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Search from './components/Search';
import Filter from './components/Filter';
import Footer from './components/Footer';

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
    }
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
        <div className="filter-div">
          <button
            type="button"
            className="filter-btn submit-btn"
            onClick={this.toggleRefineSearch}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

// refine search here
// json object to query string
