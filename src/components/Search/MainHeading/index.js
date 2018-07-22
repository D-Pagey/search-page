import React from 'react';

import './index.css';

export default function MainHeading({ count = { total_count: ''} }) {
  return (
    <div className="main-heading-container">
      <h2 className="main-heading">
        {count.total_count} VEHICLES FOUND NEAR LONDON, UNITED KINGDOM
      </h2>
    </div>
  );
}
