import React from 'react';

import './index.css';
import Results from '../results';

export default function Search() {
  return (
    <main>
      <div className="banner">
        <a
          className="banner-link"
          href="http://help.joindrover.com/personal-use-drivers/arranging-delivery-for-your-vehicle"
          target="_blank"
          rel="noopener noreferrer"
        >
        FREE DELIVERY WITHIN 50 MILES
        </a>
      </div>
      <Results />
    </main>
  );
}
