import styled from 'styled-components';

export const FeaturesListWrapper = styled.div`
  align-self: center;
  margin-top: 3px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Features = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0 10px;
`;

export const FeatureItem = styled.li`
  color: #7d807c;
  font-size: 12px;
  padding-left: 5px;
`;
