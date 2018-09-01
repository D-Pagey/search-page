import styled from 'styled-components';

export const FilterForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px;
  padding: 0 1rem;
  width: 100%;
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 1024px) {
    width: initial;
}
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
`;

export const FilterLabel = styled.label`
  color: #292b2c;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 .2rem 2px;
`;

export const Dropdown = styled.select`
  background-color: white;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  color: black;
  font-size: 100%;
  height: 40px;
  padding: 0 10px;
  width: 100%;
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  color: black;
  font-size: 100%;
  height: 40px;
  padding: 0 10px;
  width: 100%;
`;

export const BackToSearchWrapper = styled.div`
  align-items: center;
  background-color: #172B24;
  display: flex;
  height: 52px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const BackToSearchText = styled.p`
  color: white;
  margin-left: 10px;
`;

export const Chevron = styled.svg`
  margin-left: 20px;
`;

/* eslint-disable */
export const FilterWrapper = styled.div`
  display: ${props => props.hide ? 'none' : 'block'};
  width: 100%;
  @media (min-width: 1024px) {
    display: block;
    margin-left: 32px;
    width: 25%;
  }
`;
/* eslint-enable */
