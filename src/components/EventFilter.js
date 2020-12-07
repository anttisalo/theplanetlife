import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FilterField = styled.fieldset`
  border: 0;
  padding: 0;
  margin: 0;
`;

const LegendStyled = styled.legend`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const InputStyled = styled.input`
  position: absolute;
  visibility: hidden;

  & + label {
    border: 1px solid var(--color-gray-dark);
    background-color: var(--color-gray-light);
    color: var(--color-gray-dark);
  }

  &:checked + label {
    border: 1px solid var(--color-black);
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

const LabelStyled = styled.label`
  display: inline-block;
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: var(--line-height-inline-interaction);
  padding: 0.75rem 1.25rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default function EventFilter({ setFilterValue }) {
  // state functions for filter values
  const [eventDateIn, setEventDateIn] = useState('all');

  // render state array of choices
  // form submit to handle choice
  const handleChange = ({ target }) => {
    setEventDateIn(target.value);
    setFilterValue(target.value);
    // getter for data corresponding new choice
    // save data to state
  };

  return (
    <FilterField>
      <LegendStyled>Filter events by</LegendStyled>
      <InputStyled
        id="radioAll"
        type="radio"
        name="event-time"
        value="all"
        onChange={handleChange}
        checked={eventDateIn === 'all'}
      />
      <LabelStyled htmlFor="radioAll">All</LabelStyled>
      <InputStyled
        id="radioFuture"
        type="radio"
        name="event-time"
        value="future"
        onChange={handleChange}
        checked={eventDateIn === 'future'}
      />
      <LabelStyled htmlFor="radioFuture">Future</LabelStyled>
      <InputStyled
        id="radioPast"
        type="radio"
        name="event-time"
        value="past"
        onChange={handleChange}
        checked={eventDateIn === 'past'}
      />
      <LabelStyled htmlFor="radioPast">Past</LabelStyled>
    </FilterField>
  );
}
