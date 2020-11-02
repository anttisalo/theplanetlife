import React from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a.attrs({
  'aria-label': `${({ ariaLabel }) => ariaLabel};`,
})`
  color: ${(props) => (props.color ? props.color : 'var(--color-tpl-white)')};
  text-decoration: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  line-height: 3.5;
`;

export default function Link({ to, children, ...rest }) {
  return (
    <LinkStyled href={to} {...rest}>
      {children}
    </LinkStyled>
  );
}
