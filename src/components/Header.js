import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';
import logo from '../static/tplLogo.png';

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 2;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    padding: 3rem 5%;
  }
`;

const LogoLink = styled(Link)`
  display: inline-block;
  height: 2.6875rem;
  z-index: 2;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    height: 3.625rem;
  }

  img {
    height: 100%;
  }
`;

const NavStyled = styled.nav`
  float: right;
`;

const NavListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  background-color: var(--color-blue-dark);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25),
    0px 0px 0px 0px rgba(0, 0, 0, 0.16);
  transition: box-shadow, max-height, 150ms ease-out;

  [aria-expanded='true'] + & {
    max-height: 345px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25),
      0px 10px 15px 5px rgba(0, 0, 0, 0.16);
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    position: static;
    max-height: none;
    background-color: transparent;
    box-shadow: none;
    overflow: visible;
  }
`;

const NavListStyled = styled.ul`
  margin: 0;
  padding: 4.5rem 5% 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    flex-direction: row;
    padding: 0;
    align-items: center;
  }
`;

const NavItemStyled = styled.li`
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: var(--line-height-inline-interaction);
  margin: 0.875rem 0;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin-top: 0;
    margin-bottom: 0;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    &:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
`;

const NavLinkStyled = styled(Link)`
  .no-touch &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    background-color: var(--color-green-mid);
    transform: scaleY(0);
    transition: transform 150ms ease-out;
  }

  .no-touch &:hover:after {
    transform: scaleY(1);
  }

  .no-touch &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

const LinkButtonStyled = styled(Link)`
  display: inline-block;
  background-color: transparent;
  line-height: var(--line-height-inline-interaction);
  padding: 1rem;
  text-transform: uppercase;
  border: 1px solid var(--color-white);
  margin: 0;
  box-shadow: inset 0px 0px 0px 0px var(--color-white);
  transition: box-shadow 150ms ease-in;

  &:hover {
    box-shadow: inset 0px 0px 0px 2px var(--color-white);
  }

  .no-touch &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const ToggleButton = styled.button`
  position: relative;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: none;
  color: var(--color-white);
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:focus:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid rgba(255, 255, 255, 0.5);
    left: 0;
    top: 0px;
    opacity: 0.3;
    transform: scale3d(1.25, 1.2, 1);
    border-radius: 8px;
  }

  svg {
    height: 2rem;
    opacity: 1;
  }

  svg rect {
    transition: transform, opacity, width, 150ms ease-out;
  }

  &[aria-expanded='true'] rect:first-child {
    transform: rotate(45deg) translate(10px, -23px);
    width: 90%;
  }

  &[aria-expanded='true'] .middle-bar {
    opacity: 0;
  }

  &[aria-expanded='true'] rect:last-child {
    transform: rotate(-45deg) translate(-60px, -5px);
    width: 90%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: none;
  }
`;

export default function Header() {
  const [expanded, setExpanded] = useState(false);

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

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <HeaderStyled>
      <LogoLink to="/" ariaLabel="Home" fontSize="0">
        <img src={logo} alt="The planet life logo" />
      </LogoLink>
      <NavStyled>
        <ToggleButton onClick={toggleMenu} aria-expanded={expanded}>
          <svg viewBox="0 0 100 100">
            <rect x="15" y="20" width="70" height="8" fill="currentColor" />
            <rect
              className="middle-bar"
              x="15"
              y="46"
              width="70"
              height="8"
              fill="currentColor"
            />
            <rect x="15" y="72" width="70" height="8" fill="currentColor" />
          </svg>
        </ToggleButton>
        <NavListContainer>
          <NavListStyled>
            {pages.map(({ path, name }, index) => (
              <NavItemStyled key={index}>
                <NavLinkStyled to={path} fontSize="0.875rem">
                  {name}
                </NavLinkStyled>
              </NavItemStyled>
            ))}
            <NavItemStyled>
              <LinkButtonStyled to="#joinOurMission">
                Get involved
              </LinkButtonStyled>
            </NavItemStyled>
          </NavListStyled>
        </NavListContainer>
      </NavStyled>
    </HeaderStyled>
  );
}
