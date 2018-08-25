import React from 'react';
import { number, func } from 'prop-types';

import './index.css';

export default function Pagination({
  handleChange,
  fetchData,
  total,
  currentPage,
  numberPerPage,
}) {
  const numberOfPages = Math.ceil(total / 10);
  const pagesArray = numberOfPages ? Array.from(new Array(numberOfPages)) : [];

  return (
    <div className="pagination-container">
      <p className="pagination-results">
        {`Showing ${(numberPerPage * currentPage) - (numberPerPage - 1)}-
        ${currentPage * numberPerPage} of ${total || 0} results`}
      </p>
      <div className="pagination-btn-container">
        <ul className="page-list">
          {pagesArray.map((element, i) => (
            <li key={i.toString()} className="page-item">
              <button
                type="button"
                className={`page-btn ${currentPage === i + 1 ? 'active' : null}`}
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
  fetchData: func.isRequired,
  total: number,
  currentPage: number,
  numberPerPage: number,
};

Pagination.defaultProps = {
  total: '',
  currentPage: '',
  numberPerPage: 10,
};
