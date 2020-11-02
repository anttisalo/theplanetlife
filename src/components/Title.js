import React from 'react';
import styled, { css } from 'styled-components';

const TitleStyled = styled.div`
  font-family: var(--font-family-title);
  font-size: ${({ level, theme: { headings } }) => headings[level].fontSize};
  font-weight: 700;
  color: var(--color-body-text);
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
