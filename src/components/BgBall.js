import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BallStyled = styled.div`
  width: 200vmax;
  height: 200vmax;
  position: absolute;
  top: 8vmin;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(
    194deg,
    var(--color-gray-light),
    rgba(255, 255, 255, 0)
  );
  z-index: 0;
  transform: translateX(-35%);
`;

export default function BgBall() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#bgBall', {
      yPercent: '20',
      ease: 'none',
      scrollTrigger: {
        trigger: '#bgBall',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return <BallStyled id="bgBall" />;
}
