import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Para from './Paragraph';

function getTimeString(date) {
  const dateString = new Date(date);
  return new Intl.DateTimeFormat('us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(dateString);
}

const EventsStyled = styled.div`
  margin-top: 5rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
`;

const EventCardStyled = styled.div`
  margin-bottom: 2.5rem;
  background-color: var(--color-white);

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    width: 100%;
    margin-bottom: 0;
    scroll-snap-align: end;
  }
`;

const ImageAspectRatioBox = styled.div`
  height: 0;
  position: relative;
  padding-top: calc(9 / 16 * 100%);
  overflow: hidden;
`;

const ImageAspectRatioInner = styled.div`
  background-color: var(--color-gray-mid);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const EventContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
`;

const EventTitle = styled.h5`
  font-family: var(--font-family-title);
  font-weight: 400;
  color: var(--color-black);
  line-height: var(--line-height-title);
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin-top: 3vw;
    margin-bottom: 2vw;
  }
`;

const EventDate = styled.span`
  font-size: 0.875rem;
  color: var(--color-gray-mid);
  text-transform: uppercase;
`;

const EventLink = styled(Link)`
  color: var(--color-text-black);
  font-size: inherit;
`;

const EventDescription = styled(Para)`
  margin-top: 0.5rem;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletPortraitUp}) {
    margin-top: 1.5vw;
  }

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.fromTabletLandscapeUp}) {
    margin-top: 1rem;
  }
`;

export default function EventsList({ events }) {
  return (
    <EventsStyled>
      {events.length &&
        events.map((event, i) => (
          <EventCardStyled key={`event-${i}`}>
            <ImageAspectRatioBox>
              <ImageAspectRatioInner>
                {event.event_img && (
                  <img src={event.event_img} alt={event.title} />
                )}
              </ImageAspectRatioInner>
            </ImageAspectRatioBox>
            <EventContentContainer>
              <EventTitle>
                <EventLink to={event.event_url}>{event.title}</EventLink>
              </EventTitle>
              <EventDate>
                {event.start_date
                  ? getTimeString(event.start_date)
                  : 'Coming soon'}
              </EventDate>
              <EventDescription>{event.description}</EventDescription>
            </EventContentContainer>
          </EventCardStyled>
        ))}
    </EventsStyled>
  );
}
