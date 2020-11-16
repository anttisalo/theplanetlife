import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventFilter from './EventFilter';
import EventsList from './EventsList';
import Title from './Title';

const SectionStyled = styled.section`
  margin: 4rem auto;
  padding: 0 5%;
`;

const SectionNameStyled = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
  }
`;

const SectionHeadline = styled(Title)`
  margin-bottom: 4rem;
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
    <SectionStyled>
      <SectionNameStyled level={2} color="pink">
        Events
      </SectionNameStyled>
      <SectionHeadline level={4}>
        We create an action oriented environment where people get to be hands-on
        supporting environmental projects.
      </SectionHeadline>
      <EventFilter setFilterValue={getFilteredEvents} />
      <EventsList events={events} />
    </SectionStyled>
  );
}
