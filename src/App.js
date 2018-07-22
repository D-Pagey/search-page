import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Search />
      <Footer />
    </div>
  );
}

/** To Do
 * Check all styling
 * Icon
 * Menu bar
 * PropTypes
 * Default props
 * Pass params to fetch
 * isomorphic fetch
 */
