import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Para from './Paragraph';
import Title from './Title';
import logo from '../static/tplLogo.png';

const FooterStyled = styled.footer`
  position: relative;
  padding-top: 6rem;
  padding-bottom: 4rem;
  background-image: linear-gradient(
    20deg,
    var(--color-blue-dark) 40%,
    var(--color-blue-light)
  );

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-top: 10rem;
  }
`;

const ClippingSvg = styled.svg`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 35vmin;
  transform: scaleY(-1);
  fill: var(--color-gray-light);
`;

const FooterContentStyled = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 5%;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromBigDesktopUp}) {
    padding: 0;
  }
`;

const FooterTitle = styled(Title)`
  max-width: 20ch;
  font-weight: 300;
`;

const FooterPara = styled(Para)`
  max-width: 32ch;
  color: var(--color-white);
`;

const GetInvolvedButtonLink = styled(Link)`
  padding: 1.375rem 2rem;
  text-transform: uppercase;
  color: var(--color-blue-light);
  background-color: var(--color-white);
  transition: background-color 150ms ease-in;
  display: inline-flex;
  align-items: center;
  margin-top: 2.5rem;

  span {
    margin-bottom: -2px;
  }

  svg {
    fill: currentColor;
    height: 1.25em;
    margin-left: 1rem;
    transition: transform 150ms ease-in-out;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  .no-touch &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

const FooterCopy = styled.div`
  position: relative;

  img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    object-position: left;
    margin-bottom: 2rem;
  }
`;

const SomeLinks = styled.div`
  margin-top: 4rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 0;
    display: flex;
  }

  ul {
    margin: 0;
    margin-top: auto;
    margin-left: auto;
    padding: 0;
    list-style: none;
  }

  li:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const SomeLink = styled(Link)`
  svg {
    margin-right: 0.5rem;
    vertical-align: middle;
    font-size: 1.5rem;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    display: block;
    text-align: right;

    svg {
      margin-right: 0;
      margin-left: 0.5rem;
    }
  }

  > * {
    float: left;

    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletLandscapeUp}) {
      float: none;
    }
  }
`;

const Terms = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  grid-column: span 2;
  padding-top: 4rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    justify-content: flex-end;
    padding-top: 6.5rem;
  }

  a:last-child {
    @media (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.fromTabletLandscapeUp}) {
      margin-left: 1.5rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <ClippingSvg
        viewBox="0 0 375 95"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 90.8412L0 95H375V0H374.932C284.687 59.4221 176.631 94 60.5 94C40.0656 94 19.8813 92.9294 0 90.8412Z" />
      </ClippingSvg>
      <FooterContentStyled>
        <FooterCopy>
          <img src={logo} alt="The planet life logo" />
          <FooterTitle level={3} color="white">
            Turning a sustainable society into a reality
          </FooterTitle>
          <FooterPara mt="5rem" mb="0">
            Join the community to contribute to a better world among a group of
            like-minded individuals and organisations.
          </FooterPara>
          <GetInvolvedButtonLink to="#joinOurMission">
            <span>Get involved</span>
            <svg viewBox="0 0 11 18">
              <path d="M1.72031 0.209961L0.640313 1.28246L8.35031 8.99246L0.632812 16.7025L1.70531 17.775L9.95531 9.52496L10.4653 8.98496L9.94781 8.44496L1.72031 0.209961Z" />
            </svg>
          </GetInvolvedButtonLink>
        </FooterCopy>
        <SomeLinks>
          <ul>
            <li>
              <SomeLink
                fontSize="0.875rem"
                to="https://www.instagram.com/the.planet.life/"
              >
                Instagram
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </SomeLink>
            </li>
            <li>
              <SomeLink to="#" fontSize="0.875rem">
                Twitter
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </SomeLink>
            </li>
            <li>
              <SomeLink to="#" fontSize="0.875rem">
                Facebook
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z" />
                </svg>
              </SomeLink>
            </li>
          </ul>
        </SomeLinks>
        <Terms>
          <Link fontSize="0.875rem" to="#">
            Terms & Conditions
          </Link>
          <Link fontSize="0.875rem" to="#">
            Privacy policy
          </Link>
        </Terms>
      </FooterContentStyled>
    </FooterStyled>
  );
}
