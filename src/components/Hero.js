import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import globe from '../static/globe.png';

const HeroStyled = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroScrollerStyled = styled.div`
  height: 200vh;
  background-image: linear-gradient(
    to bottom,
    var(--color-blue-dark) 0%,
    var(--color-blue-light) 100%
  );
`;

const HeroFixedStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const HeroContentStyled = styled.div`
  width: 72.5rem;
  margin: 0 auto;
`;

const TitleStyles = css`
  position: relative;
  font-family: var(--font-family-body);
  font-size: 2rem;
  line-height: 3.5rem;
  color: var(--color-white);
  margin: 0;
`;

const TitleOneStyled = styled.p.attrs({
  id: 'titleOne',
})`
  ${TitleStyles}
  padding-top: 3rem;
`;

const TitleTwoStyled = styled.p.attrs({
  id: 'titleTwo',
})`
  ${TitleStyles}
  margin-top: 5rem;
  opacity: 0;
`;

const IllustrationStyled = styled.img`
  max-width: 600px;
  margin-top: 2rem;
  float: right;
  shape-outside: circle(56%);
`;

export default function Hero(props) {
  const { children: Header } = props;
  const scrollerRef = useRef();
  const heroFixedRef = useRef();
  const illustrationRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollerRef.current,
        start: () => `${window.innerHeight / 10}px top`,
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl.to('#titleOne', {
      opacity: 0,
      duration: 1,
    });
    tl.to(
      illustrationRef.current,
      {
        y: -25,
        duration: 4,
      },
      '-=2'
    );
    tl.to(
      '#titleTwo',
      {
        opacity: 1,
        duration: 2,
      },
      '-=2'
    );
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollLength = scrollerRef.current.offsetHeight;

      if (scrollTop / (scrollLength - viewportHeight) >= 1) {
        heroFixedRef.current.style.position = 'absolute';
        heroFixedRef.current.style.bottom = scrollLength;
      } else {
        heroFixedRef.current.style.position = 'fixed';
        heroFixedRef.current.style.bottom = scrollLength;
      }
    });
  });

  return (
    <HeroStyled>
      <HeroScrollerStyled ref={scrollerRef} />
      <HeroFixedStyled ref={heroFixedRef}>
        {Header}
        <HeroContentStyled>
          <IllustrationStyled
            ref={illustrationRef}
            src={globe}
            alt="Illustrated image of a globe"
          />
          <TitleOneStyled>
            The condition in which future generations will inherit our planet
            depends on our attitude and the actions we take today.
          </TitleOneStyled>
          <TitleTwoStyled>
            It’s time to unlock the world's knowledge and turn a sustainable
            society into a reality.
          </TitleTwoStyled>
        </HeroContentStyled>
      </HeroFixedStyled>
    </HeroStyled>
  );
}
