import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventFilter from './EventFilter';
import EventsList from './EventsList';
import Title from './Title';

const SectionStyled = styled.section`
  position: relative;
  margin: 4rem auto 0;
  padding: 0 5% 5rem;
  background: linear-gradient(var(--color-white), var(--color-gray-light) 50%);

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    padding-bottom: 14.125rem;
  }
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4rem;
`;

const SectionHeadline = styled(Title)`
  max-width: 50rem;
  margin-bottom: 3rem;
`;

export default function Events({ eventsData }) {
  const [events, setEvents] = useState(eventsData);

  useEffect(() => {
    setEvents(events);
  }, [events]);

  const getFilteredEvents = (eventDateIn) => {
    let comparison = (a, b) => true;
    switch (eventDateIn) {
      case 'past':
        comparison = (a, b) => a > b;
        break;
      case 'future':
        comparison = (a, b) => a < b;
        break;
      default:
        break;
    }

    const isInTimeRange = (event) => {
      const now = new Date();
      const eventDate = new Date(event.start_date);
      return comparison(now, eventDate);
    };

    const filteredEvents = eventsData.filter(isInTimeRange);

    setEvents(filteredEvents);
  };

  return (
    <SectionStyled id="events" tabindex="-1">
      <SectionNameStyled level={2} color="pink">
        Events
      </SectionNameStyled>
      <SectionHeadline level={4}>
        We create an action oriented environment where people get to be part of
        a community supporting environmental projects.
      </SectionHeadline>
      <EventFilter setFilterValue={getFilteredEvents} />
      <EventsList events={events} />
    </SectionStyled>
  );
}
