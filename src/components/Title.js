import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.div`
  font-family: var(--font-family-title);
  font-size: ${({ level, theme: { headings } }) => headings[level].fontSize};
  font-weight: 700;
  color: var(--color-blue-dark);
  line-height: var(--line-height-title);
  margin: ${({ level, theme: { headings } }) => headings[level].margin};
`;

export default function Title({ children, level }) {
  return (
    <TitleStyled as={`h${level}`} level={level}>
      {children}
    </TitleStyled>
  );
}
