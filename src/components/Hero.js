import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Para from './Paragraph';

const HeroStyled = styled.div`
  position: relative;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    height: 160vh;
  }
`;

const ScrollingContainer = styled.div`
  width: 100%;
  padding-bottom: 30vmin;
  background-image: linear-gradient(
    to bottom,
    var(--color-blue-dark) 0%,
    var(--color-blue-light) 75%
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
    top: 35%;
    left: 40%;
    transform: translateX(-70%);
    max-width: 30ch;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    font-size: 2.25rem;
    max-width: 22ch;
    padding-left: 0rem;
    padding-right: 4rem;
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
    opacity: 0;
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
    left: 50%;
    top: 25%;
    width: 60vmin;
    height: 60vmin;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    position: absolute;
    left: 50%;
    top: 20%;
    width: 70vmin;
    height: 70vmin;
  }
`;

const RoundedEndWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25vmin;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    bottom: -25vmin;
    background-color: var(--color-blue-light);
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    height: 35vmin;
    bottom: -35vmin;
  }
`;

const ClippingSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--color-white);
`;

const ArrowDownWrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--color-blue-light);
    width: 2em;
    height: 2em;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromBigDesktopUp}) {
    bottom: 8%;
  }
`;

export default function Hero(props) {
  const { children: Header } = props;
  const heroRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: {
        scrollTrigger: {
          trigger: '#hero',
          start: '+=300px top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            if (self.progress.toFixed(3) < 1) {
              if (heroRef.current.classList.contains('animation-end')) {
                heroRef.current.classList.remove('animation-end');
              }
            } else if (!heroRef.current.classList.contains('animation-end')) {
              heroRef.current.classList.add('animation-end');
            }
          },
        },
      },
    });

    if (window.matchMedia('(min-width: 900px)').matches) {
      tl.to('#title1', { opacity: 0, duration: 2 });
      tl.to('#title2', { opacity: 1, duration: 2 });
    }
  });

  return (
    <HeroStyled id="hero" ref={heroRef}>
      <ScrollingContainer>
        {Header}
        <Title1 level={1} id="title1" color="white">
          The condition in which future generations will inherit our planet
          depends on our attitude and the actions we take today.
        </Title1>
        <Title2 level={1} id="title2" color="white">
          It’s time to unlock the world's knowledge and turn a sustainable
          society into a reality.
        </Title2>
        <GlobeStyled src="https://tender-wing-c45ced.netlify.app/" />
        <RoundedEndWrapper>
          <ClippingSvg
            viewBox="0 0 375 95"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 90.8412L0 95H375V0H374.932C284.687 59.4221 176.631 94 60.5 94C40.0656 94 19.8813 92.9294 0 90.8412Z" />
          </ClippingSvg>
          <ArrowDownWrapper>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </ArrowDownWrapper>
        </RoundedEndWrapper>
      </ScrollingContainer>
    </HeroStyled>
  );
}
