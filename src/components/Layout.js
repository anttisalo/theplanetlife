import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  overflow-x: hidden;
`;

export default function Layout({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
