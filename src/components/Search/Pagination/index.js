import React from 'react';
import { func, objectOf, any } from 'prop-types';

import './index.css';

export default function Pagination({
  handleChange,
  metadata,
  fetchData,
}) {
  const { page, total_count } = metadata;
  const perPage = metadata.per_page;

  const numberOfPages = Math.ceil(metadata.total_count / 10);
  const pagesArray = numberOfPages ? Array.from(new Array(numberOfPages)) : [];

  return (
    <div className="pagination-container">
      <p className="pagination-results">
        {`Showing ${(perPage * page) - (perPage - 1)}-${page * perPage} of
        ${metadata ? total_count : 0} results`}
      </p>
      <div className="pagination-btn-container">
        <ul className="page-list">
          {pagesArray.map((element, i) => (
            <li key={i.toString()} className="page-item">
              <button
                type="button"
                className={`page-btn ${page === i + 1 ? 'active' : null}`}
                name="page"
                value={i + 1}
                onClick={(event) => {
                  handleChange(event, fetchData);
                }}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  handleChange: func.isRequired,
  metadata: objectOf(any),
  fetchData: func.isRequired,
};

Pagination.defaultProps = {
  metadata: {},
};
