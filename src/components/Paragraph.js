import React from 'react';
import styled from 'styled-components';

const ParaStyled = styled.p`
  margin-top: ${({ mt }) => mt || '1rem'};
  margin-bottom: ${({ mb }) => mb || '1rem'};
`;

export default function Para({ children, ...rest }) {
  return <ParaStyled {...rest}>{children}</ParaStyled>;
}
