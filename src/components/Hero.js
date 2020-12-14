import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Para from './Paragraph';

const HeroStyled = styled.div`
  position: relative;
`;

const ScrollingContainer = styled.div`
  width: 100%;
  height: calc(100vh + 20vmin);
  background-image: linear-gradient(
    to bottom,
    var(--color-blue-dark) 66.78%,
    var(--color-blue-light)
  );

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    height: 100vh;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) and (orientation: portrait) {
    height: 50vh;
  }
`;

const ContentGrid = styled.div`
  padding-top: 5.25rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-top: 7.625rem;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: calc(50vw + 7.625rem);
    max-width: 80rem;
    max-height: 47.625rem;
    margin: 0 auto;
  }
`;

const ContentGridCell = styled.div`
  &:first-child {
    padding-top: 5%;
    padding-left: 7%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: relative;

    &:first-child {
      padding-top: 20%;
      padding-left: 10%;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromBigDesktopUp}) {
    &:first-child {
      padding-top: 19vh;
    }
  }
`;

const Headline = styled(Para)`
  color: var(--color-white);
  max-width: 33ch;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    font-size: 1.5rem;
    max-width: 33ch;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    max-width: 25ch;
  }

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) and (orientation: landscape) {
    font-size: 1rem;
  }
`;

const GlobeStyled = styled.iframe`
  display: block;
  width: 90vmin;
  height: 90vmin;
  margin: 0 auto;
  border: 0;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin: 0 auto;
    width: 70vmin;
    height: 70vmin;
  }

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) and (orientation: landscape) {
    display: none;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: absolute;
    left: 0;
    top: 0;
    width: 50vw;
    height: 50vw;
    max-width: 40rem;
    max-height: 40rem;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) and (orientation: landscape) {
    left: -15%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromBigDesktopUp}) {
    left: -5%;
    max-width: 85vh;
    max-height: 85vh;
  }
`;

const RoundedEndWrapper = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 20vmin;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    bottom: -20vmin;
    background-color: var(--color-blue-light);
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    height: calc(280 / 1440 * 100vw);
    bottom: calc(280 / 1440 * -100vw);
  }
`;

const ClippingSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--color-white);
`;

const ArrowDownLink = styled.a`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50%;
  font-size: 0;
  z-index: 2;
  transform: translate(-50%, 25%);
  transition: transform 150ms ease-out;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: static;
    margin-top: 15%;
    transform: none;
  }

  &:focus {
    outline: none;
  }

  .no-touch &:hover {
    transform: translateY(5%);
  }

  .no-touch &:focus svg {
    box-shadow: 0px 0px 0px 3px rgba(255, 255, 255, 0.5);
  }

  .no-touch &:not(:focus-visible) svg {
    box-shadow: none;
  }
`;

const ArrowDown = styled.svg`
  stroke: var(--color-blue-light);
  fill: none;
  width: 2em;
  height: 2em;
  background-color: white;
  border-radius: 50%;
  padding: 0.75rem;
  font-size: 1.75rem;
`;

export default function Hero(props) {
  gsap.registerPlugin(ScrollTrigger);
  const { children: Header } = props;
  const heroRef = useRef();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom center-=200',
      scrub: 0.5,
      onUpdate: (self) => {
        if (self.progress.toFixed(3) < 1) {
          if (heroRef.current.classList.contains('animation-end')) {
            heroRef.current.classList.remove('animation-end');
          }
        } else if (!heroRef.current.classList.contains('animation-end')) {
          heroRef.current.classList.add('animation-end');
        }
      },
    });
  });

  return (
    <HeroStyled id="hero" ref={heroRef}>
      <ScrollingContainer>
        {Header}
        <ContentGrid>
          <ContentGridCell>
            <Headline mt="0">
              The condition in which future generations will inherit our planet
              depends on our attitude and the actions we take today.
            </Headline>
            <Headline mt="0">
              It’s time to unlock the world's knowledge and turn a sustainable
              society into a reality.
            </Headline>
            <ArrowDownLink
              href="#WelcomeSection"
              aria-label="To welcome section"
            >
              <ArrowDown viewBox="0 0 20 26">
                <path
                  d="M18.6758 16.0547L9.83695 24.8935L0.998112 16.0547"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <line x1="9.80859" y1="24" x2="9.80859" strokeWidth="2" />
              </ArrowDown>
            </ArrowDownLink>
          </ContentGridCell>
          <ContentGridCell>
            <GlobeStyled
              tabIndex="-1"
              src="https://tender-wing-c45ced.netlify.app/"
            />
          </ContentGridCell>
        </ContentGrid>
        <RoundedEndWrapper>
          <ClippingSvg
            viewBox="0 0 1440 282"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 220.851L0 282H1440V0.327148C1157.23 177.543 822.829 280 464.5 280C304.039 280 148.377 259.455 0 220.851Z" />
          </ClippingSvg>
        </RoundedEndWrapper>
      </ScrollingContainer>
    </HeroStyled>
  );
}
