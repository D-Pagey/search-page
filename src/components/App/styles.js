import styled from 'styled-components';

export const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 40px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  } 
`;

export const RefineSearch = styled.div`
  align-items: center;
  background-color: #172B24;  
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 11px;
  position: fixed;
  width: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
`;
