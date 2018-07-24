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
  }

  toggleRefineSearch = () => {
    const { isRefineSearch } = this.state;

    this.setState({ isRefineSearch: !isRefineSearch });
  }

  render() {
    const { isRefineSearch } = this.state;
    const buttonText = isRefineSearch ? 'Refine your search' : 'Update search and hide filter';

    return (
      <div className="app">
        <Navbar />
        <Banner />
        {isRefineSearch ? <Search /> : <Filter toggle={this.toggleRefineSearch} />}
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

// state
// refine search here
// json object to query string
