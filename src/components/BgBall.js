import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BallWrapper = styled.div`
  position: relative;
`;

const BallStyled = styled.div`
  position: absolute;
  top: 3rem;
  left: -40%;
  width: 200vmax;
  height: 200vmax;
  border-radius: 50%;
  background: linear-gradient(
    194deg,
    var(--color-gray-light),
    rgba(255, 255, 255, 0)
  );
  z-index: 0;
`;

export default function BgBall() {
  const BallRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(BallRef.current, {
      yPercent: '20',
      ease: 'none',
      scrollTrigger: {
        trigger: BallRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return (
    <BallWrapper>
      <BallStyled ref={BallRef} />
    </BallWrapper>
  );
}
