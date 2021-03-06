import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background-color: #f9e5be;
  padding: 6px;
  text-align: center;
  width: 100%;
`;

export const BannerLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
  href: 'http://help.joindrover.com/personal-use-drivers/arranging-delivery-for-your-vehicle',
})`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: black;
  }
`;
