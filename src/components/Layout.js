import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  overflow: hidden;
`;

export default function Layout({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
