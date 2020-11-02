import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import Title from './Title';

const SectionStyled = styled.section`
  padding: 10rem 0;
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 5rem;
`;

const OperationsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridRowStyled = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-gap: 0 4rem;
`;

const CategoryStyled = styled.div`
  text-align: right;
  padding: 2rem 0;
`;

const CategoryNameStyled = styled(Title)`
  text-transform: uppercase;
`;

const RunningNumberStyled = styled.div`
  font-family: var(--font-family-title);
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-body-text);
`;

export default function HowItWorks() {
  return (
    <SectionStyled>
      <SectionNameStyled level={5}>How it works</SectionNameStyled>
      <OperationsStyled>
        <GridRowStyled>
          <CategoryStyled>
            <RunningNumberStyled>01</RunningNumberStyled>
            <CategoryNameStyled level={5}>Research</CategoryNameStyled>
          </CategoryStyled>
          <Accordion title="We investigate and identify opportunities for future development">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius:
            Mihi vero ista valde probata sunt, quod item fratri puto. Si de re
            disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio.
          </Accordion>
        </GridRowStyled>
        <GridRowStyled>
          <CategoryStyled>
            <RunningNumberStyled>02</RunningNumberStyled>
            <CategoryNameStyled level={5}>Projects</CategoryNameStyled>
          </CategoryStyled>
          <Accordion title="Projects are matched with a unique skillset of the community">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius:
            Mihi vero ista valde probata sunt, quod item fratri puto. Si de re
            disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio.
          </Accordion>
        </GridRowStyled>
        <GridRowStyled>
          <CategoryStyled>
            <RunningNumberStyled>03</RunningNumberStyled>
            <CategoryNameStyled level={5}>Ventures</CategoryNameStyled>
          </CategoryStyled>
          <Accordion title="As a collective we support, create and grow startups">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Lucius:
            Mihi vero ista valde probata sunt, quod item fratri puto. Si de re
            disceptari oportet, nulla mihi tecum, Cato, potest esse dissensio.
          </Accordion>
        </GridRowStyled>
      </OperationsStyled>
    </SectionStyled>
  );
}
