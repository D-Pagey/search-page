import React from 'react';
import { number, func } from 'prop-types';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  width: 100%;
  @media (min-width: 425px) {
    margin-bottom: 25px;
  }
`;

const PaginationResults = styled.p`
  margin: 0;
`;

const PaginationBtnWrapper = styled.div`
  margin-top: 10px;
  width: 232px;
  @media (min-width: 425px) {
    width: 323px;
  }
  @media (min-width: 768px) {
    width: 460px;
  }
`;

const PageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: inherit;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PageItem = styled.li`
  display: flex;
  margin: 3px;
`;

/* eslint-disable */
const PageButton = styled.button`
  background-color: ${props => props.active ? '#50ff7d' : 'white'};
  border: 0;
  border-radius: 6px;
  padding: 12.5px 5px;
  width: 2.5rem;
`;
/* eslint-enable */

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
