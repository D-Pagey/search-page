import styled from 'styled-components';

export const NoVehiclesWrapper = styled.div`
  background-color: white;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  margin-bottom: 40px;
  padding: 16px;
  @media (min-width: 768px) {
    width: 690px;
  }
`;

export const NoVehiclesHeader = styled.div`
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 98%;
  }
`;

export const NoVehiclesTitle = styled.h3`
  font-size: 28px;
  letter-spacing: -1.2px;
  line-height: 1.1;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const NoVehiclesForm = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NoVehiclesLabel = styled.label`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const UpdatesCopy = styled.p`
  padding-left: 20px;
`;

export const FormInput = styled.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  font-size: 1rem;
`;

export const FormSelect = styled.select`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #e4e3e3;
  border-radius: 6px;
  font-size: 1rem;
`;

/* eslint-disable */
export const FormGroup = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  margin-bottom: 10px;
  @media (min-width: 768px) {
    &:nth-of-type(2) {
        margin: 0 10px;
    }

    &:nth-of-type(4) {
        width: 98%;
    }
  }
`;
/* eslint-enable */
