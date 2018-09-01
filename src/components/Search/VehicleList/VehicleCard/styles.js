import styled from 'styled-components';

export const VehicleCardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const VehicleImage = styled.img.attrs({
  alt: 'Car',
})`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  @media (min-width: 1024px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 6px;
    height: 270px;
    width: 276px;
  }
`;
