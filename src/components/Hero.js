import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import globe from '../static/globe.png';
import Title from './Title';

const HeroStyled = styled.div`
  position: relative;
  height: 200vh;
  background-image: linear-gradient(
    to bottom,
    var(--color-blue-dark) 0%,
    var(--color-blue-light) 100%
  );
`;

const ScrollingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .animation-end & {
    position: absolute;
    top: auto;
    bottom: 0;
  }
`;

const titleDefaultStyle = css`
  width: 80%;
  font-size: 1.25rem;
  position: absolute;
  max-width: 27rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    max-width: 25rem;
  }
`;

const Title1 = styled(Title)`
  ${titleDefaultStyle};
  left: 10%;
  bottom: 15%;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    bottom: auto;
    top: 80vw;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    top: 20%;
    left: 40%;
    transform: translateX(-80%);
  }
`;

const Title2 = styled(Title)`
  ${titleDefaultStyle};
  left: 10%;
  bottom: 7%;
  text-align: right;
  opacity: 0;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    bottom: auto;
    left: auto;
    right: 20%;
    top: 90vw;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    left: 40%;
    right: auto;
    top: 40%;
    transform: translateX(-78%);
    text-align: left;
  }
`;

const GlobeStyled = styled.img`
  position: absolute;
  width: 70%;
  max-width: 600px;
  left: 50%;
  top: 17%;
  transform: translateX(-50%);

  @media (min-width: ${({ theme: { breakpoints } }) =>
    breakpoints.fromTabletPortraitUp}) {
    width: 50%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
    breakpoints.fromTabletLandscapeUp}) {
        width: 45%;
        transform: translateX(-10%);
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

    tl.to('#title1', { opacity: 0, duration: 2 });
    tl.to('#title2', { opacity: 1, duration: 2 });
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
          The condition in which future generations will inherit our planet
          depends on our attitude and the actions we take today.
        </Title2>
        <GlobeStyled
          id="globe"
          src={globe}
          alt="Illustrated image of a globe"
        />
      </ScrollingContainer>
    </HeroStyled>
  );
}
