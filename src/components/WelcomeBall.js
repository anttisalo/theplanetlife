import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import welcomeImg from '../static/Welcome_pic.jpg';

const BallWrapper = styled.div`
  position: relative;
  padding: 0 2.5rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding: 0;
  }

  img {
    position: relative;
    width: 100%;
    max-width: 468px;
    clip-path: url(#mask);
    z-index: 1;
    float: right;
  }
`;

const BallStyled = styled.div`
  width: 19.5rem;
  height: 19.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  background-image: linear-gradient(
    45deg,
    rgba(33, 214, 116, 0.6) 18.9%,
    rgba(232, 253, 242, 0.6) 82.31%
  );
  border-radius: 50%;
  transform: translate(0, 35%);

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    width: 40rem;
    height: 40rem;
    transform: translate(0, 15%);
  }
`;

export default function BgBall() {
  const BallRef = useRef();
  const ImgRef = useRef();
  const BREAKPOINT = 768;

  const setParallax = () => {
    if (window.innerWidth >= BREAKPOINT) {
      gsap.to(BallRef.current, {
        yPercent: '3',
        scrollTrigger: {
          trigger: BallRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(ImgRef.current, {
        yPercent: '10',
        scrollTrigger: {
          trigger: ImgRef.current,
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
    <BallWrapper>
      <svg viewBox="0 0 17.47 24" height="0" width="0">
        <defs>
          <clipPath
            id="mask"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.057241 0.041666)"
          >
            <path d="M17.47,1.36c-1.65-0.85-3.51-1.34-5.49-1.34c-6.63,0-12,5.37-12,12c0,6.63,5.37,12,12,12c1.98,0,3.84-0.49,5.49-1.34V1.36z" />
          </clipPath>
        </defs>
      </svg>
      <img
        ref={ImgRef}
        src={welcomeImg}
        alt="3d illustrated person riding a rocket"
      />
      <BallStyled ref={BallRef} />
    </BallWrapper>
  );
}
