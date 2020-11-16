import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Para from './Paragraph';
import Title from './Title';

const AccordionWrapper = styled.div`
  position: relative;
  padding-bottom: 3.5rem;
  margin-bottom: 3.5rem;
  border-bottom: 3px solid #f2f4f8;

  &:last-child {
    border: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-left: 2rem;
  }

  button {
    all: inherit;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    width: 100%;
    transition: color 150ms ease-in;
  }

  button svg {
    height: 1.25em;
    flex: 0 0 auto;
    margin-left: auto;
  }

  button:focus svg {
    padding: 3px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 3px currentColor;
  }

  button:not(.has-touch):hover {
    color: var(--color-blue-light);
  }

  [aria-expanded='true'] .vertical {
    display: none;
  }

  [aria-expanded] rect {
    fill: currentColor;
  }

  [aria-expanded] circle {
    stroke: currentColor;
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
      <Title level={4} color={expanded ? 'blue-light' : 'gray-dark'}>
        <button ref={btnRef} aria-expanded={expanded}>
          {title}
          <svg viewBox="-25 -25 50 50" aria-hidden="true" focusable="false">
            <rect className="vertical" x="-1" y="-11" width="2" height="22" />
            <rect y="-1" x="-11" height="2" width="22" />
            <circle cx="0" cy="0" r="24" strokeWidth="2" fill="transparent" />
          </svg>
        </button>
      </Title>
      <AccordionContent hidden={!expanded}>
        <Para mt="0" mb="0">
          {children}
        </Para>
      </AccordionContent>
    </AccordionWrapper>
  );
}
