import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  overflow-x: hidden;
  position: relative;

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0c198d 64%, #2b1ec8 75%);
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  &.bg-blue:before {
    opacity: 1;
  }
`;

export default function Layout({ children }) {
  return <StyledMain id="layoutWrapper">{children}</StyledMain>;
}
