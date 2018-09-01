import React from 'react';
import { number, func } from 'prop-types';

import {
  PaginationWrapper,
  PaginationResults,
  PaginationBtnWrapper,
  PageList,
  PageItem,
  PageButton,
} from './styles';

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
    <PaginationWrapper>
      <PaginationResults>
        {`Showing ${(numberPerPage * currentPage) - (numberPerPage - 1)}-
        ${currentPage * numberPerPage} of ${total || 0} results`}
      </PaginationResults>
      <PaginationBtnWrapper>
        <PageList>
          {pagesArray.map((element, i) => (
            <PageItem key={i.toString()}>
              <PageButton
                type="button"
                active={currentPage === i + 1}
                name="page"
                value={i + 1}
                onClick={(event) => {
                  handleChange(event, fetchData);
                }}
              >
                {i + 1}
              </PageButton>
            </PageItem>
          ))}
        </PageList>
      </PaginationBtnWrapper>
    </PaginationWrapper>
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
