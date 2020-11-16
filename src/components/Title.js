import React from 'react';
import styled, { css } from 'styled-components';

const TitleStyled = styled.div`
  font-family: var(--font-family-title);
  font-weight: 400;
  color: ${({ color, theme: { colors } }) =>
    color ? `var(${colors[color].value})` : 'var(--color-blue-light)'};
  line-height: var(--line-height-title);
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
`;

export default function Title({ children, level, ...rest }) {
  return (
    <TitleStyled as={`h${level}`} level={level} {...rest}>
      {children}
    </TitleStyled>
  );
}
