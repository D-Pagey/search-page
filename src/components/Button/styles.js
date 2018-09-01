import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 100%;
  `;

export const Btn = styled.button`
  background-color: #50ff7d;
  border: 0;
  border-radius: 6px;
  font-size: .95rem;
  font-weight: bold;
  height: 40px;
  margin: 5px 0;
  padding: 10px;
  width: 100%;

  @media (min-width: 768px) {
    width: initial;
  }
`;
