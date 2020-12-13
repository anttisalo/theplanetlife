import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';
import logo from '../static/tplLogo.png';

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color, padding-top, padding-bottom, 150ms ease-out;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    padding: 2rem 3%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: absolute;
    top: 0;
    left: 0;
    height: 7.625rem;
    padding-right: 5%;
    padding-left: 5%;
  }

  .animation-end & {
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 1.1875rem;
    padding-bottom: 1.1875rem;
    background-color: rgba(255, 255, 255, 1);
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

  .animation-end & {
    color: var(--color-blue-light);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  .animation-end &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
  }

  svg {
    height: 2rem;
    opacity: 1;
  }

  svg rect {
    transition: all 150ms ease-out;
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
      breakpoints.fromTabletLandscapeUp}) {
    display: none;
  }
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

  .animation-end & {
    background-color: var(--color-white);
  }

  [aria-expanded='true'] + & {
    max-height: 345px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25),
      0px 10px 15px 5px rgba(0, 0, 0, 0.16);
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
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
    padding-top: 6rem;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    flex-direction: row;
    padding: 0;
    align-items: center;
  }
`;

const NavItemStyled = styled.li`
  margin: 1.25rem 0;

  &:last-child {
    display: none;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletLandscapeUp}) {
      display: block;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 0;
    margin-bottom: 0;

    &:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
`;

const NavLinkStyled = styled(Link)`
  padding: 0.25rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  transition: color 150ms ease-out;

  .animation-end & {
    color: var(--color-blue-light);
  }

  .no-touch &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
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

  .no-touch &:not(:focus-visible) {
    outline: none;
  }

  .no-touch .animation-end &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
  }
`;

const ButtonToggleContact = styled.button`
  position: relative;
  font-size: 0.875rem;
  line-height: var(--line-height-inline-interaction);
  color: var(--color-white);
  text-transform: uppercase;
  padding: 0.25rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 150ms ease-out;

  .animation-end & {
    color: var(--color-blue-light);
  }

  .no-touch &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
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

  .no-touch &:not(:focus-visible) {
    outline: none;
  }

  .no-touch .animation-end &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
  }
`;

const GetInvolvedButtonLink = styled(Link)`
  padding: 1.375rem 2.5rem 1.25rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--color-blue-light);
  background-color: var(--color-white);
  transition: transform, color, background-color, 150ms ease-in;

  .no-touch &:hover {
    background-color: #dbdae9;
  }

  .animation-end & {
    color: var(--color-white);
    background-color: var(--color-blue-light);
  }

  .no-touch .animation-end &:hover {
    background-color: var(--color-blue-dark);
  }

  span {
    margin-bottom: -2px;
  }

  .no-touch &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  .no-touch &:not(:focus-visible) {
    outline: none;
  }

  .no-touch .animation-end &:focus {
    outline: 2px solid rgba(43, 30, 200, 0.25);
  }
`;

export default function Header({ toggleContactForm }) {
  const [expanded, setExpanded] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <HeaderStyled>
      <LogoLink to="/" ariaLabel="Home" fontSize="0">
        <img src={logo} alt="The planet life logo" />
      </LogoLink>
      <nav>
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
            <NavItemStyled>
              <NavLinkStyled to="#howItWorks">How it works</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
              <NavLinkStyled to="#events">Our events</NavLinkStyled>
            </NavItemStyled>
            <NavItemStyled>
              <ButtonToggleContact onClick={toggleContactForm}>
                Contact us
              </ButtonToggleContact>
            </NavItemStyled>
            <NavItemStyled>
              <GetInvolvedButtonLink to="#joinOurMission">
                <span>Get involved</span>
              </GetInvolvedButtonLink>
            </NavItemStyled>
          </NavListStyled>
        </NavListContainer>
      </nav>
    </HeaderStyled>
  );
}
