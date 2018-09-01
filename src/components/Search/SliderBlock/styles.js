import styled from 'styled-components';

export const SliderBlockWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  padding: 8px 16px 4px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const SubscriptionTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const SubscriptionForm = styled.form`
  margin-top: 5px;
`;

export const RentalOptionsWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  margin-top: 4px;
`;

export const SubscriptionLabel = styled.label`
  line-height: 1.5;
  padding-left: 8px;
`;

export const DurationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 12px 0 10px;
`;

export const DurationTitle = styled.label`
  margin: 0;
  font-size: 0.9rem;
`;

export const MonthsDropdown = styled.select`
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
  height: 2rem;
  line-height: 1.5;
  margin: 0 8px;
  padding-left: 7px;
`;
