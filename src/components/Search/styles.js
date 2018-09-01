import styled from 'styled-components';

/* eslint-disable */
export const SearchWrapper = styled.main`
  align-items: center;
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: column;
  padding: 0 15px;
  @media (min-width: 768px) {
    width: 690px;
  }
  @media (min-width: 1024px) {
    padding: 0 15px;
    width: 700px;
  }
`;
/* eslint-enable */
