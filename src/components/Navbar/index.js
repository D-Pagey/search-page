import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #fff;
  width: 100%;
  @media (min-width: 1024px) {
    width: 95%;
  }
`;

const NavbarTitle = styled.h1`
  color: rgb(1, 39, 1);
  font-size: 2rem;
  margin: 0 0 0 15px;
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarTitle>DROVER</NavbarTitle>
    </NavbarWrapper>
  );
}
