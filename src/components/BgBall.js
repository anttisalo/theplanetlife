import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BallStyled = styled.div`
  width: 100vmax;
  height: 100vmax;
  position: absolute;
  top: 8vmin;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(
    194deg,
    var(--color-gray-light),
    rgba(255, 255, 255, 0) 80%
  );
  z-index: 0;
  transform: translateX(-35%);
  transition: opacity 300ms ease-in;

  .bg-blue & {
    opacity: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    width: 150vmax;
    height: 150vmax;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromRegularDesktopUp}) {
    width: 200vmax;
    height: 200vmax;
  }
`;

export default function BgBall() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to('#bgBall', {
      yPercent: '3',
      scrollTrigger: {
        trigger: '#whatWeDo',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return <BallStyled id="bgBall" />;
}
