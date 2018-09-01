import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  width: 100%;
  @media (min-width: 425px) {
    margin-bottom: 25px;
  }
`;

export const PaginationResults = styled.p`
  margin: 0;
`;

export const PaginationBtnWrapper = styled.div`
  margin-top: 10px;
  width: 232px;
  @media (min-width: 425px) {
    width: 323px;
  }
  @media (min-width: 768px) {
    width: 460px;
  }
`;

export const PageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: inherit;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PageItem = styled.li`
  display: flex;
  margin: 3px;
`;

/* eslint-disable */
export const PageButton = styled.button`
  background-color: ${props => props.active ? '#50ff7d' : 'white'};
  border: 0;
  border-radius: 6px;
  padding: 12.5px 5px;
  width: 2.5rem;
`;
/* eslint-enable */
