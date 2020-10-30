import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div``;

export default function Layout({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
