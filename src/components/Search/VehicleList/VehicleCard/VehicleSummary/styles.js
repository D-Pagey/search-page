import styled from 'styled-components';

export const VehicleSummaryWrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
`;

export const VehicleDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0 4px 16px;
  width: 16rem;
`;

export const VehicleTitle = styled.h3`
  color: black;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.2px;
  margin: 0;
`;

export const VehicleLocation = styled.p`
  margin: 0;
  padding: 2px 0;
`;

export const VehicleAvailability = styled.p`
  align-self: center;
  margin: 0 10px;
  text-align: center;
  width: 7.5rem;
`;
