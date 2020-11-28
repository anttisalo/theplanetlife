import React from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a.attrs(
  (props) =>
    props.ariaLabel && {
      'aria-label': props.ariaLabel,
    }
)`
  position: relative;
  color: ${({ color, theme: { colors } }) =>
    color ? `var(${colors[color].value})` : 'var(--color-white)'};
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: var(--line-height-inline-interaction);
`;

export default function Link({ to, children, ...rest }) {
  return (
    <LinkStyled href={to} {...rest}>
      {children}
    </LinkStyled>
  );
}
