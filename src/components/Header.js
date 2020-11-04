import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';
import logo from '../images/tplLogo.png';

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 2;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.s}) {
    padding: 2rem;
  }
`;

const LogoStyled = styled.div`
  max-width: 7.5rem;
`;

const NavStyled = styled.nav`
  [hidden] {
    display: none;
  }
`;

const NavMenuButton = styled.button`
  background-color: transparent;
  color: var(--color-tpl-white);
  padding: 1rem;
  border: 0;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    display: none;
  }
`;

const NavListStyled = styled.ul`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  padding-right: 1rem;
  list-style: none;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.m}) {
    position: static;
    flex-direction: row;
    height: auto;
    padding-right: 0;
  }
`;

const NavItemStyled = styled.li`
  float: left;
  margin-left: 3.5rem;
  color: var(--color-tpl-white);
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

  const [isHidden, setIsHidden] = useState(true);

  return (
    <HeaderStyled>
      <LogoStyled>
        <Link to="/" ariaLabel="Home" fontSize="0">
          <img src={logo} alt="The planet life logo" />
        </Link>
      </LogoStyled>
      <NavStyled>
        <NavMenuButton
          aria-expanded={!isHidden}
          onClick={(e) => setIsHidden(!isHidden)}
        >
          Menu
        </NavMenuButton>
        <NavListStyled hidden={isHidden}>
          {pages.map(({ path, name }, index) => (
            <NavItemStyled key={index}>
              <Link to={path}>{name}</Link>
            </NavItemStyled>
          ))}
        </NavListStyled>
      </NavStyled>
    </HeaderStyled>
  );
}
