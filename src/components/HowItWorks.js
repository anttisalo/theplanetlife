import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import Title from './Title';

const SectionStyled = styled.section`
  position: relative;
  padding-top: 4rem;
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

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-bottom: 2.5rem;
  }
`;

export default function HowItWorks() {
  return (
    <SectionStyled id="howItWorks">
      <SectionNameStyled level={2} color="pink">
        How it works
      </SectionNameStyled>
      <OperationsStyled>
        <CategoryNameStyled>01. Research</CategoryNameStyled>
        <Accordion title="We investigate and identify opportunities for future development">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius:
          Mihi vero ista valde probata sunt, quod item fratri puto. Si de re
          disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio.
        </Accordion>
        <CategoryNameStyled>02. Projects</CategoryNameStyled>
        <Accordion title="Projects are matched with a unique skillset of the community">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius:
          Mihi vero ista valde probata sunt, quod item fratri puto. Si de re
          disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio.
        </Accordion>
        <CategoryNameStyled>03. Ventures</CategoryNameStyled>
        <Accordion title="As a collective we support, create and grow startups">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius:
          Mihi vero ista valde probata sunt, quod item fratri puto. Si de re
          disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio.
        </Accordion>
      </OperationsStyled>
    </SectionStyled>
  );
}
