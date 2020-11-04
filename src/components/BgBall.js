import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const BallWrapper = styled.div`
  position: relative;
`;

const BallStyled = styled.div`
  position: absolute;
  top: 8rem;
  left: 50%;
  width: 200vw;
  height: 200vw;
  border-radius: 50%;
  background: linear-gradient(
    164.3deg,
    #e8fdf6 -14.26%,
    rgba(232, 253, 246, 0) 70.48%
  );
  z-index: 0;
  transform: translateX(-38%);
`;

export default function BgBall(params) {
  const BallRef = useRef();

  useEffect(() => {
    gsap.to(BallRef.current, {
      y: `+=${window.innerHeight / 2}`,
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
