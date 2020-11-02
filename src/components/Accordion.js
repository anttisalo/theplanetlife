import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Para from './Paragraph';
import Title from './Title';

const AccordionWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
  padding-right: 6rem;
  border-top: 3px solid #f2f4f8;

  button {
    all: inherit;
    cursor: pointer;
  }

  button svg {
    height: 1.25em;
    flex: 1 0 auto;
    position: absolute;
    right: 0;
    top: 2rem;
  }

  button:focus svg {
    outline: 2px solid;
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

const AccordionContent = styled.div``;

export default function Accordion({ title, children }) {
  const [expander, setExpanded] = useState();
  const buttonRef = useRef();

  useEffect(() => {
    const btn = buttonRef.current;
    const heading = btn.parentNode;
    const target = heading.nextElementSibling;

    btn.onclick = () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      console.log(expanded);

      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    };
  });

  return (
    <AccordionWrapper>
      <Title level={4}>
        <button ref={buttonRef} aria-expanded="false">
          {title}
          <svg viewBox="-25 -25 50 50" aria-hidden="true" focusable="false">
            <rect className="vertical" x="-1" y="-11" width="2" height="22" />
            <rect y="-1" x="-11" height="2" width="22" />
            <circle cx="0" cy="0" r="24" strokeWidth="2" fill="transparent" />
          </svg>
        </button>
      </Title>
      <AccordionContent hidden>
        <Para>{children}</Para>
      </AccordionContent>
    </AccordionWrapper>
  );
}
