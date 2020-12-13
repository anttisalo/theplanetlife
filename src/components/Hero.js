import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Para from './Paragraph';

const HeroStyled = styled.div`
  position: relative;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    height: 200vh;
  }
`;

const ScrollingContainer = styled.div`
  width: 100%;
  padding-bottom: 30vmin;
  background-image: linear-gradient(
    to bottom,
    var(--color-blue-dark) 66.78%,
    var(--color-blue-light)
  );

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding-bottom: 0;

    .animation-end & {
      position: absolute;
      top: auto;
      bottom: 0;
    }
  }
`;

const ContentGrid = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin: 7.625rem auto 0;
    width: 100%;
    max-width: 80rem;
    height: calc(100vh - 7.625rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .animation-end & {
    margin-top: 7.625rem;
  }
`;

const ContentGridCell = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: relative;
  }
`;

const titleDefaultStyle = css`
  font-size: 1.125rem;
  color: var(--color-white);
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    font-size: 1.5rem;
    max-width: 40ch;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: absolute;
    top: 25%;
    left: 12%;
    max-width: 30ch;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    font-size: 1.75rem;
  }
`;

const Title1 = styled(Para)`
  ${titleDefaultStyle};
  margin-top: 10vmin;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 1rem;
  }
`;

const Title2 = styled(Para)`
  ${titleDefaultStyle};

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    span {
      opacity: 0;
    }
  }
`;

const GlobeStyled = styled.iframe`
  display: block;
  width: 90vmin;
  height: 90vmin;
  margin: 4rem auto 2rem;
  border: 0;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin: 0 auto;
    width: 70vmin;
    height: 70vmin;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100vh - 7.625rem);
    height: calc(100vh - 7.625rem);
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) and (orientation: landscape) {
    left: -25%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromBigDesktopUp}) {
    left: 0;
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
  position: absolute;
  bottom: 0;
  left: 50%;
  font-size: 0;
  z-index: 2;
  transform: translate(-50%, 25%);
  transition: transform 150ms ease-out;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    bottom: -200%;
    left: 0;
    transform: translate(50%, 0);
  }

  &:focus {
    outline: none;
  }

  .no-touch &:hover {
    transform: translate(50%, 5%);
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
    const timeline = gsap.timeline();

    ScrollTrigger.create({
      animation: timeline,
      trigger: heroRef.current,
      start: '+=300px top',
      end: 'bottom bottom',
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

    if (window.matchMedia('(min-width: 900px)').matches) {
      timeline.to('#title1', { opacity: 0, duration: 2 });
      timeline.to('#title2 > span', { opacity: 1, duration: 2 });
    }
  });

  return (
    <HeroStyled id="hero" ref={heroRef}>
      <ScrollingContainer>
        {Header}
        <ContentGrid>
          <ContentGridCell>
            <Title1 level={1} id="title1" color="white">
              The condition in which future generations will inherit our planet
              depends on our attitude and the actions we take today.
            </Title1>
            <Title2 level={1} id="title2" color="white">
              <span>
                It’s time to unlock the world's knowledge and turn a sustainable
                society into a reality.
              </span>
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
            </Title2>
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
