import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';

const URL = 'https://app.joindrover.com/api/web/vehicles?vehicle_type=Consumer';

export default class App extends Component {
  state = {

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
    return (
      <div className="app">
        <Navbar />
        <Search />
        <Footer />
      </div>
    );
  }
}

/** To Do
 * Check all styling
 * Use feature branches
 * Icon
 * Menu bar
 * PropTypes
 * Default props
 * Pass params to fetch
 * isomorphic fetch
 */
