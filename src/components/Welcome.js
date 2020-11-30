import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import welcomeImg from '../static/Welcome_pic.jpg';
import Title from './Title';
import Para from './Paragraph';

const SectionStyled = styled.section`
  position: relative;
  max-width: 30rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(18.25rem - 37.5px), 1fr));
  grid-gap: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    .flip-order {
      order: 1;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    max-width: 80rem;
    grid-gap: 4rem;
    padding: 8rem 5% 4rem;
    padding-bottom: 4rem;
    margin-top: 25vmin;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    margin-top: 35vmin;
    padding-bottom: 8rem;
  }
`;

const SectionContentStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5rem 5% 2rem;
  max-width: 30.625rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding: 2rem 0 0;
  }
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 2.5rem;
`;

const WelcomeImage = styled.img`
  position: relative;
  width: 100%;
  max-width: 33.75rem;
  z-index: 1;
  float: right;
  grid-row: 2 / 2;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    grid-row: auto;
  }
`;

const GreenBallStyled = styled.div`
  width: 100vmin;
  height: 100vmin;
  position: absolute;
  display: none;
  background-image: linear-gradient(
    45deg,
    rgba(33, 214, 116, 0.5) 18.9%,
    rgba(232, 253, 242, 0.5) 82.31%
  );
  border-radius: 50%;
  transform: translateX(-50%);

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: block;
    bottom: 20%;
    left: 0%;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    bottom: 0%;
    left: 50%;
    width: 80vmin;
    height: 80vmin;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    bottom: -10%;
    left: 50%;
    width: 85vmin;
    height: 85vmin;
  }
`;

export default function Welcome() {
  const setParallax = () => {
    if (window.matchMedia('(min-width: 900px)').matches) {
      gsap.to('#greenBall', {
        yPercent: '6',
        scrollTrigger: {
          trigger: '#WelcomeSection',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('#welcomeImg', {
        yPercent: '15',
        scrollTrigger: {
          trigger: '#WelcomeSection',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setParallax();

    window.addEventListener('resize', setParallax);
  });

  return (
    <SectionStyled id="WelcomeSection">
      <WelcomeImage
        id="welcomeImg"
        src={welcomeImg}
        alt="3d illustrated person riding a rocket"
      />
      <GreenBallStyled id="greenBall" />
      <SectionContentStyled>
        <SectionNameStyled level={2} color="pink">
          Welcome
        </SectionNameStyled>
        <Title level={3}>
          We are a creative hub working towards a brighter future.
        </Title>
        <Para mt="3.5rem" mb="0">
          Our mission is to support and accelerate the ambition of climate
          solutions around the world through the spirit of community knowledge
          and sharing.
        </Para>
        <Para mt="1.5rem" mb="0">
          We leverage society for change at scale. The Planet Life raises
          awareness of interesting projects and opportunities. We help scale up
          existing working solutions & systems and provide opportunities for
          people to be part of the solution.
        </Para>
        <Para mt="1.5rem" mb="0">
          As a platform for collaborative innovation, we engage with individuals
          and organisations who want to build a brighter future for our planet
          and society, together.
        </Para>
      </SectionContentStyled>
    </SectionStyled>
  );
}
