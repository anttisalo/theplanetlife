import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Link from './Link';
import logo from '../static/tplLogo.png';
import ContactForm from './ContactForm';

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 2;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    padding: 2rem 3%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-right: 5%;
    padding-left: 5%;
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
  margin: 1.25rem 0;

  &:last-child {
    display: none;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletPortraitUp}) {
      display: block;
    }
  }

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
  font-size: 0.875rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      // eslint-disable-next-line prettier/prettier
      breakpoints.fromTabletPortraitUp}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    font-size: 0.75rem;
  }

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

const ContactFormToggleStyled = styled.button`
  background-color: transparent;
  line-height: var(--line-height-inline-interaction);
  padding: 1.25rem;
  padding-top: 1.375rem;
  margin: 0;
  border: 0;
  text-transform: uppercase;
  color: var(--color-blue-light);
  background-color: var(--color-white);
  transition: background-color 150ms ease-in;
  cursor: pointer;

  .no-touch &:hover {
    background-color: #d0d4fb;
  }

  .no-touch &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      // eslint-disable-next-line prettier/prettier
      breakpoints.fromTabletPortraitUp}) and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    font-size: 0.75rem;
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
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
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
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const toggleContactForm = () => {
    console.log('toggle');
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    if (isFormVisible) {
      document.body.classList.add('contact-form-open');
    } else {
      document.body.classList.remove('contact-form-open');
    }
  }, [isFormVisible]);

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
                <NavLinkStyled to={path}>{name}</NavLinkStyled>
              </NavItemStyled>
            ))}
            <NavItemStyled>
              <ContactFormToggleStyled onClick={toggleContactForm}>
                Get involved
              </ContactFormToggleStyled>
            </NavItemStyled>
          </NavListStyled>
        </NavListContainer>
      </NavStyled>
      {isFormVisible && (
        <ContactForm isVisible={isFormVisible} toggleForm={toggleContactForm} />
      )}
    </HeaderStyled>
  );
}
