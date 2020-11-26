import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  overflow-x: hidden;
  transition: background-color 300ms ease-in;

  &.bg-blue {
    background-color: var(--color-blue-light);
  }
`;

export default function Layout({ children }) {
  return <StyledMain id="layoutWrapper">{children}</StyledMain>;
}
