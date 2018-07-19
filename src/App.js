import React, { Component } from 'react';

import './App.css';
import Navbar from './components/presentational/navbar';
import Search from './components/presentational/search';

// const URL = 'https://app.joindrover.com/api/web/vehicles';

export default class App extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Navbar />
        <Search />
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
 */
