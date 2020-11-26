import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Para from './Paragraph';
import Title from './Title';

const AccordionWrapper = styled.div`
  position: relative;
  padding-bottom: 3.5rem;
  margin-bottom: 3.5rem;
  border-bottom: 3px solid #f2f4f8;

  .bg-blue & {
    color: #9890ee;
    border-bottom: 3px solid var(--color-black);
  }

  &:last-child {
    border: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-left: 2rem;
  }
`;

const ButtonStyled = styled.button`
  all: inherit;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  transition: color 150ms ease-in;

  svg {
    height: 1.25em;
    flex: 0 0 auto;
    margin-left: auto;
  }

  &:focus svg {
    padding: 3px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 3px currentColor;
  }

  .no-touch &:hover {
    color: var(--color-blue-light);
  }

  .no-touch .bg-blue &:hover {
    color: var(--color-white);
  }

  &[aria-expanded='true'] .vertical {
    display: none;
  }

  &[aria-expanded] rect {
    fill: currentColor;
  }

  &[aria-expanded] circle {
    stroke: currentColor;
  }
`;

const AccordionTitle = styled(Title)`
  color: var(--color-gray-dark);

  .bg-blue & {
    color: #9890ee;
  }

  &.expanded {
    color: var(--color-blue-light);
  }

  .bg-blue &.expanded {
    color: var(--color-white);
  }
`;

const AccordionPara = styled(Para)`
  .bg-blue & {
    color: var(--color-white);
  }
`;

const AccordionContent = styled.div`
  margin-top: 1.5rem;
`;

export default function Accordion({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    btnRef.current.onclick = () => {
      setExpanded(!expanded);
    };
  });

  return (
    <AccordionWrapper>
      <AccordionTitle level={4} className={expanded && 'expanded'}>
        <ButtonStyled ref={btnRef} aria-expanded={expanded}>
          {title}
          <svg viewBox="-25 -25 50 50" aria-hidden="true" focusable="false">
            <rect className="vertical" x="-1" y="-11" width="2" height="22" />
            <rect y="-1" x="-11" height="2" width="22" />
            <circle cx="0" cy="0" r="24" strokeWidth="2" fill="transparent" />
          </svg>
        </ButtonStyled>
      </AccordionTitle>
      <AccordionContent hidden={!expanded}>
        <AccordionPara mt="0" mb="0">
          {children}
        </AccordionPara>
      </AccordionContent>
    </AccordionWrapper>
  );
}
