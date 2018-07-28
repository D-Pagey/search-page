import React from 'react';
import { func, objectOf, any } from 'prop-types';

import './index.css';

export default function Pagination({
  handleChange,
  userParams,
  totalCount,
  fetchData,
}) {
  const { page } = userParams;

  return (
    <div className="pagination-container">
      <p className="pagination-results">
        {`Showing ${page}-${page}0 of
        ${totalCount ? totalCount.total_count : 0} results`}
      </p>
      <div className="pagination-btn-container">
        <ul className="page-list">
          <li className="page-item">
            <button
              type="button"
              className={`page-btn ${userParams.page === 1 ? 'active' : null}`}
              name="page"
              value="1"
              onClick={(event) => {
                handleChange(event, () => fetchData());
              }}
            >
            1
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className={`page-btn ${userParams.page === 2 ? 'active' : null}`}
              name="page"
              value="2"
              onClick={(event) => {
                handleChange(event, () => fetchData());
              }}
            >
            2
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className={`page-btn ${userParams.page === 3 ? 'active' : null}`}
              name="page"
              value="3"
              onClick={(event) => {
                handleChange(event, () => fetchData());
              }}
            >
            3
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className={`page-btn ${userParams.page === 4 ? 'active' : null}`}
              name="page"
              value="4"
              onClick={(event) => {
                handleChange(event, () => fetchData());
              }}
            >
            4
            </button>
          </li>
          <li className="page-item">
            <button
              type="button"
              className={`page-btn ${userParams.page === 5 ? 'active' : null}`}
              name="page"
              value="5"
              onClick={(event) => {
                handleChange(event, () => fetchData());
              }}
            >
            5
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  handleChange: func.isRequired,
  userParams: objectOf(any).isRequired,
  totalCount: objectOf(any),
  fetchData: func.isRequired,
};

Pagination.defaultProps = {
  totalCount: {},
};

/** To Do
 * Create page buttons based off of total results
 * Trigger rerender the page based off page number
 */
