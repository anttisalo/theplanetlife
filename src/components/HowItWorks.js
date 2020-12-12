import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Accordion from './Accordion';
import Title from './Title';
import Para from './Paragraph';
import SwirlIllustration from '../static/Swirl_Break.png';

const SectionStyled = styled.section`
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 27vmin 5% 4rem;
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-bottom: 5rem;
  }
`;

const OperationsStyled = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-left: 2rem;
  }
`;

const CategoryNameStyled = styled.span`
  display: block;
  font-family: var(--font-family-title);
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--color-gray-mid);
  line-height: var(--line-height-title);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  transition: color 300ms ease-in;

  .bg-blue & {
    color: var(--color-white);
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-bottom: 2.5rem;
  }
`;

const AccordionPara = styled(Para)`
  .bg-blue & {
    color: var(--color-white);
  }
`;

const AmoebaImg = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: block;
    position: absolute;
    right: 5%;
    top: 0;
    width: 20%;
    transform: translateY(-100%);
  }
`;

export default function HowItWorks() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const layoutWrapper = document.getElementById('layoutWrapper');
    ScrollTrigger.create({
      trigger: '#howItWorks',
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onEnter: () => {
        layoutWrapper.classList.add('bg-blue');
      },
      onLeave: () => {
        layoutWrapper.classList.remove('bg-blue');
      },
      onEnterBack: () => {
        layoutWrapper.classList.add('bg-blue');
      },
      onLeaveBack: () => {
        layoutWrapper.classList.remove('bg-blue');
      },
    });
  });

  return (
    <SectionStyled id="howItWorks" tabindex="-1">
      <AmoebaImg
        src={SwirlIllustration}
        alt="filler illustration"
        aria-hidden="true"
      />
      <SectionNameStyled level={2} color="pink">
        How it works
      </SectionNameStyled>
      <OperationsStyled>
        <CategoryNameStyled>01. Research</CategoryNameStyled>
        <Accordion title="We investigate and identify opportunities for future development">
          <AccordionPara>
            With a focus on agriculture, city infrastructure and energy as
            socio-economic systems, we dedicate our research to gathering
            information from multiple sources enabling us to scan the market for
            new opportunities and technologies.
          </AccordionPara>
          <AccordionPara>
            Our research helps us to create new tools, articles, share
            resources, and set up projects for our community.
          </AccordionPara>
        </Accordion>
        <CategoryNameStyled>02. Projects</CategoryNameStyled>
        <Accordion title="Selected projects are matched with the unique skillset of our community">
          <AccordionPara>
            We welcome projects and ideas that challenge the status quo.
            Community members are matched to the specific needs of the project
            ask. This enables us to create tailored workshops and events. We
            welcome projects from NGOs, charities, early startups and
            individuals who could benefit from the knowledge of our
            action-oriented community.
          </AccordionPara>
        </Accordion>
        <CategoryNameStyled>03. Ventures</CategoryNameStyled>
        <Accordion title="With the support of the community We create and grow startups">
          <AccordionPara>
            We work with the best talent selected from our community to bring
            our own venture ideas to life. New or existing startups are build
            and supported through the process of research, opportunity
            development and project creation.
          </AccordionPara>
        </Accordion>
      </OperationsStyled>
    </SectionStyled>
  );
}
