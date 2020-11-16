import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';
import logo from '../static/tplLogo.png';

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
  z-index: 2;
`;

const LogoStyled = styled.div`
  width: 7.5rem;
`;

const NavListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItemStyled = styled.li`
  float: left;
  margin-left: 3.5rem;
  color: var(--color-white);
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pages {
            name
            path
          }
        }
      }
    }
  `);

  const { pages } = data.site.siteMetadata;

  return (
    <HeaderStyled>
      <LogoStyled>
        <Link to="/" ariaLabel="Home" fontSize="0">
          <img src={logo} alt="The planet life logo" />
        </Link>
      </LogoStyled>
      <nav>
        <NavListStyled>
          {pages.map(({ path, name }, index) => (
            <NavItemStyled key={index}>
              <Link to={path}>{name}</Link>
            </NavItemStyled>
          ))}
        </NavListStyled>
      </nav>
    </HeaderStyled>
  );
}
